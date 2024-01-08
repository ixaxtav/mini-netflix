"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button className="button-reset" onClick={() => reset()}>
        Please Try Later
      </button>
    </div>
  );
}
