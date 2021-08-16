{ signal: [
    { name: "ACLK",    wave: "P.................." },
    { name: "ARESETn", wave: "01................." },
    { name: "ARADDR",  wave: "x.3.x...4.x.......", data: ["0", "1024",] },
    { name: "ARBURST", wave: "x.3.x...4.x.......", data: ["1 (INCR)", "1 (INCR)"]},
    { name: "ARLEN",   wave: "x.3.x...4.x.......", data: ["0 (1 beat)", "1 (2 beats)"]},
    { name: "ARID",    wave: "x.3.x...4.x.......", data: ["1", "3"]},
    { name: "ARSIZE",  wave: "x.3.x...4.x.......", data: ["2 (32-bit)", "2 (32-bit)"]},
    { name: "ARVALID", wave: "0.1.0...1.x......."},
    { name: "ARREADY", wave: "0..10....10......."},

    { name: "RID",     wave: "x....3.x...4..x4.x", data: ["1", "3", "3"]},
    { name: "RRESP",   wave: "x....3.x...4..x4.x", data: ["0 (OKAY)", "0 (OKAY)", "0 (OKAY)"]},
    { name: "RDATA",   wave: "x....3.x...4..x4.x", data: ["D0", "D1024", "D1028"]},
    { name: "RVALID",  wave: "0....1.0...1..01.0"},
    { name: "RREADY",  wave: "0.....10.....10.10"}
  ]
}