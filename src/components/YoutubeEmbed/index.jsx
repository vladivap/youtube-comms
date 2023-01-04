export const YoutubeEmbed = ({ embedId, title }) => (
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title={title}
      allowFullScreen
    />
);
