export function greedy(notes: number[], value: number) {
  let result: number[] = [];

  let remaining = value;

  for (let i = 0; i < notes.length; i++) {
    result[i] = 0;
    while (remaining >= notes[i]) {
      remaining -= notes[i];
      result[i]++;
    }
  }

  return result;
}
