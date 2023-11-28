import fs from "fs-extra";
import { Mutex } from "async-mutex";
import Course from "./Course";

export default class File {
  private static filename = "./src/classes/dados.txt";
  private static writeMutex = new Mutex();
  
  static async append(course: Course): Promise<void> | never {
    const release = await this.writeMutex.acquire();
    try {
      let texto = await fs.readFile(this.filename, "utf8");
      texto += course.toString() + "\r\n";
      await fs.writeFile(this.filename, texto, "utf8");
    } catch (e: any) {
      throw new Error(e.message);
    } finally {
      release();
    }
  }
}
