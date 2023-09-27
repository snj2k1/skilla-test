import axios from "axios";
import { useEffect, useState } from "react";
import { RECORD_OPTIONS, RECORD_URL } from "../../config";
import ReactAudioPlayer from "react-audio-player";

const GetRecord = ({ record }) => {
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    axios
      .post(RECORD_URL, null, {
        ...RECORD_OPTIONS,
        params: { record },
        responseType: "arraybuffer",
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: "audio/mpeg" });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
      });
  }, [record]);

  return audioUrl && <ReactAudioPlayer src={audioUrl} controls />;
};

export { GetRecord };
