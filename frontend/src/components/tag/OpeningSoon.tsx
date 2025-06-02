export default function OpeningSoonTag() {
  return (
    <div 
      className="inline-flex items-center px-3 py-1 bg-amber-100 border border-amber-200 text-amber-800 text-sm font-medium"
      style={{
        clipPath: 'polygon(50% 0%, 52% 8%, 58% 5%, 60% 12%, 68% 8%, 70% 15%, 78% 12%, 80% 20%, 88% 18%, 90% 25%, 95% 23%, 97% 30%, 100% 35%, 95% 40%, 97% 47%, 100% 50%, 97% 53%, 95% 60%, 100% 65%, 97% 70%, 95% 77%, 90% 75%, 88% 82%, 80% 80%, 78% 88%, 70% 85%, 68% 92%, 60% 88%, 58% 95%, 52% 92%, 50% 100%, 48% 92%, 42% 95%, 40% 88%, 32% 92%, 30% 85%, 22% 88%, 20% 80%, 12% 82%, 10% 75%, 5% 77%, 3% 70%, 0% 65%, 3% 60%, 5% 53%, 0% 50%, 3% 47%, 5% 40%, 0% 35%, 3% 30%, 5% 23%, 10% 25%, 12% 18%, 20% 20%, 22% 12%, 30% 15%, 32% 8%, 40% 12%, 42% 5%, 48% 8%)'
      }}
    >
      <svg 
        className="w-4 h-4 mr-2" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
      Opening Soon
    </div>
  );
}