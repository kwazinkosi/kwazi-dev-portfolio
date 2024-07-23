import ReactPlayer from 'react-player';

export default function DemoVideo({ video_path }) {
  return (
    <div className="relative pt-56 pb-16">
      <ReactPlayer
        url={video_path}
        controls
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};
