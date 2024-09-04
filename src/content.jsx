function Content() {
  return (
    <div className="content">
      <h1>
        Unleashing the Power of <b>AI</b> for Cutting-Edge <b>Web Design.</b>
      </h1>
      <button
        className="scroll-button"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <img src="/down.png" alt="Scroll Down" />
      </button>
    </div>
  );
}

export default Content;
