export async function generateMetadata({ params, searchParams }, parent) {
  const {
    segments: [title],
  } = params;
  return {
    title: `${decodeURIComponent(title)} | Next Movie`,
    description: "",
  };
}

export default function Page({
  params: {
    segments: [title, id],
  },
}) {
  return (
    <div>
      <h4>{decodeURIComponent(title)}</h4>
    </div>
  );
}
