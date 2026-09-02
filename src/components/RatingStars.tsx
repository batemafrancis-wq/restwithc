export default function RatingStars({ rating }: { rating: number }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-1 text-orange-500">
      {stars.map((s) => {
        const fill = rating >= s ? 1 : rating >= s - 0.5 ? 0.5 : 0;
        return (
          <svg key={s} width="16" height="16" viewBox="0 0 20 20" aria-hidden>
            <defs>
              <linearGradient id={`star-${s}-${rating}`}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L10 1.5z"
              fill={`url(#star-${s}-${rating})`}
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        );
      })}
    </div>
  );
}
