{ signal: [
    { name: "ACLK",    wave: "P..............." },
    { name: "ARESETn", wave: "01.............." },
    { name: "ARADDR",  wave: "x.4.x...........", data: ["8",] },
    { name: "ARBURST", wave: "x.4.x...........", data: ["0 (FIXED)"]},
    { name: "ARLEN",   wave: "x.4.x...........", data: ["3 (4 beat)"]},
    { name: "ARID",    wave: "x.4.x...........", data: ["5"]},
    { name: "ARSIZE",  wave: "x.4.x...........", data: ["2 (32-bit)", "2 (32-bit)"]},
    { name: "ARVALID", wave: "0.1.0..........."},
    { name: "ARREADY", wave: "0..10..........."},

    { name: "RID",     wave: "x....4.4.x4.4.x.", data: ["5", "5", "5", "5"]},
    { name: "RRESP",   wave: "x....4.4.x4.4.x.", data: ["0 (OKAY)", "0 (OKAY)", "0 (OKAY)", "0 (OKAY)"]},
    { name: "RDATA",   wave: "x....4.4.x4.4.x.", data: ["D8", "D8", "D8", "D8"]},
    { name: "RVALID",  wave: "0....1...01...0."},
    { name: "RREADY",  wave: "0.....1010.1010."}
  ]
}