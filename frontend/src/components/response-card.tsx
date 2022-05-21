export default function ResponseCard({ results }: { results: string }) {
  return (
    <div className="response card">
      <p>Esse é o resultado: </p>
      <textarea readOnly name="results" id="results" value={results}></textarea>
    </div>
  );
}
