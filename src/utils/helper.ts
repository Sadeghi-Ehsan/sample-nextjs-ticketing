/** used for concatenating multiple classNames */
export const classJoin = (classes: (string | undefined)[]) =>
  classes
    .filter(cls => cls)
    .map((cls: string) => cls.trim())
    .join(" ");
