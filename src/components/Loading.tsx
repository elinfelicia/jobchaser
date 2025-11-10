function Loading() {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="loading-spinner" aria-hidden="true"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default Loading;

