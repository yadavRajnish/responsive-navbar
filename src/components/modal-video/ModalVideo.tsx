import { useEffect, useState, useRef } from "react";

function ModalVideo({ isOpen, onClose }: { isOpen: any; onClose: () => void }) {
  const closeBtn = useRef(null);
  const [fullVideoUrl, setFullVideoUrl] = useState("");

  useEffect(() => {
    if (isOpen) {
      const { videoId, channel } = isOpen;
      if (channel === "youtube") {
        setFullVideoUrl(getYoutubeUrl(videoId));
      } else if (channel === "vimeo") {
        setFullVideoUrl(getVimeoUrl(videoId));
      }
    }
  }, [isOpen]);

  function getYoutubeUrl(videoId: string) {
    return "https://www.youtube.com/embed/" + videoId;
  }

  function getVimeoUrl(videoId: string) {
    return "https://player.vimeo.com/video/" + videoId;
  }

  return isOpen ? (
    <div
      className="modal-video"
      tabIndex={-1}
      role="dialog"
      aria-label="video"
      onClick={onClose}
    >
      <div className="modal-video-body">
        <div className="modal-video-inner">
          <button
            className="modal-video-close-btn"
            aria-label="video"
            ref={closeBtn}
            onClick={onClose}
          />
          <div className="modal-video-movie-wrap">
            <iframe
              width="460"
              height="230"
              src={fullVideoUrl}
              allowFullScreen={true}
              tabIndex={-1}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ModalVideo;
