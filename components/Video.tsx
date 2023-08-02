'use client'

type VideoProps = {
  videoId: string
}

export const Video = (props: VideoProps) => {
  return (
    <iframe src={`https://player.vimeo.com/video/${props.videoId}?h=4d237d11ac&loop=1&autoplay=1&autopause=0&byline=0&title=0&muted=1&controls=0`} frameBorder="0" width="640" height="250" allow="autoplay" allowFullScreen></iframe>
  )
}
