import ReactPlayer from 'react-player'

type VideoProps = {
  url: string
}

export const Video = (props: VideoProps) => {
  return (
    <ReactPlayer
      url={props.url}
      playing
      muted
      loop
      controls={false}
      width="100%" // Set the width as needed
      height="100%" // Set the height as needed
    />
  )
}
