{ signal: [
    { name: "ACLK",    wave: "P................." },
    { name: "ARESETn", wave: "01................" },
    { name: "AWADDR",  wave: "x.4.x.............", data: ["8",] },
    { name: "AWBURST", wave: "x.4.x.............", data: ["1 (INCR)"]},
    { name: "AWLEN",   wave: "x.4.x.............", data: ["3 (4 beat)"]},
    { name: "AWID",    wave: "x.4.x.............", data: ["5"]},
    { name: "AWSIZE",  wave: "x.4.x.............", data: ["2 (32-bit)", "2 (32-bit)"]},
    { name: "AWVALID", wave: "0.1.0............."},
    { name: "AWREADY", wave: "0..10............."},

    { name: "WSTRB",   wave: "x....4.4.x4.4.x...", data: ["STRB8", "STRB12", "STRB16", "STRB20"]},
    { name: "WDATA",   wave: "x....4.4.x4.4.x...", data: ["D8", "D12", "D16", "D20"]},
    { name: "WVALID",  wave: "0....1...01...0..."},
    { name: "WREADY",  wave: "0.....1010.1010..."},

    { name: "BID",     wave: "x..............4.x", data: ["5"]},
    { name: "BRESP",   wave: "x..............4.x", data: ["0 (OKAY)"]},
    { name: "BVALID",  wave: "0..............1.0"},
    { name: "BREADY",  wave: "0...............10"}
  ]
}