function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-10">

      <div
        className="
          h-14
          w-14
          border-4
          border-blue-500
          border-t-transparent
          rounded-full
          animate-spin
        "
      />

      <p className="mt-4 text-slate-400">
        AI Model Analyzing Startup...
      </p>

    </div>
  );
}

export default LoadingSpinner;