SplitWord.Opening = (text: string, index: number) => {
  const delay = index * 30;
  const hide = index === 5 || index === 7 || index === 8 || index === 9;
  const last = index === 16;
  return (
    <span
      key={text + `${index}`}
      className={`title-word ${hide ? "hide" : "show"} ${last && "punctuation"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </span>
  );
};

SplitWord.Provider = (text: string, index: number) => {
  const delay = index * 20;
  return (
    <span
      key={text + `${index}`}
      className="login-provider text-black"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </span>
  );
};

SplitWord.Aurhor = (text: string, index: number) => {
  const delay = index * 20;
  return (
    <span
      key={text + `${index}`}
      className="splitword_author"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </span>
  );
};
SplitWord.Title = (text: string, index: number) => {
  return (
    <span key={text + `${index}`} className="splitword_title">
      {text}
    </span>
  );
};
SplitWord.Price = (text: string, index: number) => {
  return (
    <span key={text + `${index}`} className="splitword_price">
      {text}
    </span>
  );
};

SplitWord.MouseCircle = (text: string, index: number) => {
  const delay = index * 12;

  return (
    <span
      key={text + `${index}`}
      style={{
        transform: `rotate(${delay}deg) translateY(-3rem)`,
      }}
    >
      {text}
    </span>
  );
};
export default function SplitWord() {}
