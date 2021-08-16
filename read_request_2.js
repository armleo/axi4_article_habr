{ signal: [
    { name: "ACLK",    wave: "P..............." },
    { name: "ARESETn", wave: "01.............." },
    { name: "ARADDR",  wave: "x.3.x...........", data: ["8",] },
    { name: "ARBURST", wave: "x.3.x...........", data: ["2 (WRAP)"]},
    { name: "ARLEN",   wave: "x.3.x...........", data: ["3 (4 beat)"]},
    { name: "ARID",    wave: "x.3.x...........", data: ["4"]},
    { name: "ARSIZE",  wave: "x.3.x...........", data: ["2 (32-bit)", "2 (32-bit)"]},
    { name: "ARVALID", wave: "0.1.0..........."},
    { name: "ARREADY", wave: "0..10..........."},

    { name: "RID",     wave: "x....3.3.x3.3.x.", data: ["4", "4", "4", "4"]},
    { name: "RRESP",   wave: "x....3.3.x3.3.x.", data: ["0 (OKAY)", "0 (OKAY)", "0 (OKAY)", "0 (OKAY)"]},
    { name: "RDATA",   wave: "x....3.3.x3.3.x.", data: ["D8", "D12", "D0", "D4"]},
    { name: "RVALID",  wave: "0....1...01...0."},
    { name: "RREADY",  wave: "0.....1010.1010."}
  ]
}