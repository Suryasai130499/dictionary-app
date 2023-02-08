import { useRef } from 'react';
import styles from './index.module.css';
import meaningStore from '../../state/meaning';
import PlayIcon from '../../icons/play';

const Meaning = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mean = meaningStore((store) => store.meaning);
  const error = meaningStore((store) => store.error);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return error.title ? (
    <div className={styles.ErrorWrapper}>
      <div className={styles.image}>
        <img
          src="/Emoji.png"
          alt="Emoji"
        />
      </div>
      <p className={styles.text}>
        <p className={styles.errorTitle}>{error.title}</p>
        <p className={styles.description}>
          {`${error.message} ${error.resolution}`}
        </p>
      </p>
    </div>
  ) : (
    <div className={styles.MeaningWrapper}>
      <div>
        <h1 className={styles.title}>{mean.word}</h1>
        <div className={styles.Section}>
          {mean.phonetics?.map(
            (value, index) =>
              value.text &&
              value.audio && (
                <div
                  key={index}
                  className={styles.titleSection}
                >
                  <div className={styles.leftSection}>
                    <p className={styles.phonetic}>/{value.text}/</p>
                  </div>
                  {value.audio && (
                    <div
                      onClick={handleClick}
                      className={styles.rightSection}
                    >
                      <PlayIcon />
                      <audio
                        ref={audioRef}
                        className={styles.audio}
                        src={`${value.audio}`}
                      ></audio>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      </div>
      {mean.origin && (
        <div className={styles.origin}>
          <b>Origin:</b> {mean.origin}
        </div>
      )}
      <div className={styles.meanings}>
        {mean.meanings?.map((me, index) => (
          <div
            key={index}
            className={styles.MeaningsWrapper}
          >
            <div
              key={index}
              className={styles.meaning}
            >
              <div className={styles.partsofSpeech}>{me.partOfSpeech}</div>
              <span className={styles.line} />
            </div>
            <div className={styles.mean}>
              <p className={styles.meaningTitle}>Meaning</p>
              <ul className={styles.means}>
                {me.definitions.map((def, index) => (
                  <li
                    className={styles.listItem}
                    key={index}
                  >
                    <div className={styles.definition}>
                      <p className={styles.defText}>{def.definition}</p>
                      {def.example && def.example !== '' ? (
                        <p className={styles.example}>"{def.example}"</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
              {me.definitions.map(
                (def, index) =>
                  def.synonyms.length > 0 && (
                    <div
                      key={index}
                      className={styles.synonyms}
                    >
                      <p className={styles.MeaningTitle}>Synonyms</p>
                      <div className={styles.synonymsWrapper}>
                        {def.synonyms.map((synonym, index) => (
                          <p
                            key={index}
                            className={styles.synonym}
                          >
                            {synonym}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
              )}
              {me.definitions.map(
                (def, index) =>
                  def.antonyms.length > 0 && (
                    <div
                      key={index}
                      className={styles.synonyms}
                    >
                      <p className={styles.MeaningTitle}>Synonyms</p>
                      <div className={styles.synonymsWrapper}>
                        {def.antonyms.map((antonym, index) => (
                          <p
                            key={index}
                            className={styles.antonym}
                          >
                            {antonym}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meaning;
