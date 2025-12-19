export default function GoogleReviews() {
  const reviews = [
    {
      name: "Rahul Verma",
      text: "Trainer support bahut acha hai. Trial ke baad membership le li.",
    },
    {
      name: "Neha Sharma",
      text: "Clean gym, good crowd. Female friendly.",
    },
    {
      name: "Amit Singh",
      text: "₹999 trial worth it. Machines well maintained.",
    },
  ];

  return (
    <section className="ui-section pt-6 pb-14 sm:pt-8 sm:pb-18">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium ui-muted">
            ⭐ 4.8 Google rating · Trusted by real members
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl font-semibold">
            Real reviews from our gym members
          </h2>
        </div>

        {/* Reviews */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div key={i} className="ui-card p-5">
              <p className="text-sm leading-relaxed">
                “{review.text}”
              </p>
              <p className="mt-3 text-xs font-medium ui-muted">
                — {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* Trust link */}
        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline ui-muted"
          >
            See more verified reviews on Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}
