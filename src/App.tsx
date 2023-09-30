import "./App.css";

function App() {
  return (
    <div>
      <header className="header flex md:justify-between items-center px-[60px] py-[36px] rounded-[23px] bg-[#D9D9D9] gap-[20px] sm:justify-center flex-wrap">
        <div className="block_1_header">
          <input
            type="text"
            name=""
            id=""
            placeholder="Air density:"
            className="outline-none border-b-[1px] border-b-[#000] bg-transparent px-[10px] py-[10px] placeholder:md:text-[24px] placeholder:sm:text-[15px] md:text-[24px] sm:text-[15px] text-[#7D7676] placeholder:text-[#7D7676]"
          />
        </div>
        <div className="block_2_header">
          <input
            type="text"
            name=""
            id=""
            placeholder="Temperature:"
            className="outline-none border-b-[1px] border-b-[#000] bg-transparent px-[10px] py-[10px] placeholder:md:text-[24px] placeholder:sm:text-[15px] md:text-[24px] sm:text-[15px] text-[#7D7676] placeholder:text-[#7D7676]"
          />
        </div>
        <div className="block_3_header">
          <input
            type="text"
            name=""
            id=""
            placeholder="Day:"
            className="outline-none border-b-[1px] border-b-[#000] bg-transparent px-[10px] py-[10px] placeholder:md:text-[24px] placeholder:sm:text-[15px] md:text-[24px] sm:text-[15px] text-[#7D7676] placeholder:text-[#7D7676]"
          />
        </div>
      </header>

      <section className="section">
        <div className="section_block h-[40vh]">
          <div className="blocks_of_block_1"></div>
          <div className="blocks_of_block_2">
            <div className="sun"></div>
          </div>
          <div className="blocks_of_block_3"></div>
        </div>
      </section>
      <footer className="footer sm:h-[40vh] md:h-[50vh] lg:h-[46.5vh] bg-[#14F5E8]"></footer>
    </div>
  );
}

export default App;
