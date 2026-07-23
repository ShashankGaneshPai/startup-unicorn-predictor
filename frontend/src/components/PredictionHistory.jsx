function PredictionHistory() {

  const history = JSON.parse(
    localStorage.getItem("predictions") || "[]"
  );

  return (
    <div className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        Recent Predictions
      </h2>

      {history.length === 0 ? (
        <p className="text-slate-400">
          No predictions yet.
        </p>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            className="
              border-b
              border-slate-800
              py-4
            "
          >
            <p>{item.prediction}</p>

            <p className="text-slate-400">
              {item.probability}%
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default PredictionHistory;