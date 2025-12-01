export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-green">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-light border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Loading...</p>
      </div>
    </div>
  );
}
