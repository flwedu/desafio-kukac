export default function checkNullOrEmpty(args: any[]) {
  return args.some(
    (value) => value === null || value === undefined || value === ""
  );
}
