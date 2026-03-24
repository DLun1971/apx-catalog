// apx-compact-data.js
// Variants: APX 4000, APX 3000, APX 2000, APX 1000, APX 1000i, APX 900
// Source: APX Radio Accessories Catalog 2026

var APX_COMPACT_DATA = {
  variants: ["4000", "3000", "2000", "1000", "1000i", "900"],

  "RSM": [
    { desc: "IMPRES windporting RSM with volume toggle, orange button, 3.5mm jack (IP68)", part: "PMMN4099", variants: ["4000","3000","2000","1000","900"], impres: true, multi_mic: false, noise_type: "Windporting", viqi: false, vol_ctrl: true, orange_btn: true, ch_ctrl: false, prog_btn: "1", audio_jack: "3.5mm", ip: "IP68", hazloc: "UL", dims_mm: "60 x 78 x 28" },
    { desc: "WM800 wireless RSM (with battery and USB charging cable)", part: "PMMN4158", variants: ["4000","3000","2000","1000","900"], impres: true, multi_mic: true, noise_type: "Multi-mic noise suppression", viqi: false, vol_ctrl: true, orange_btn: false, ch_ctrl: false, prog_btn: "3", audio_jack: "3.5mm", ip: "IP68", hazloc: "UL", dims_mm: "67.5 x 98 x 32" },
    { desc: "Wireless RSM with battery, clip and dual unit charger", part: "RLN6554", variants: ["4000","3000","2000","900"], impres: false, multi_mic: false, noise_type: "Windporting", viqi: false, vol_ctrl: true, orange_btn: false, ch_ctrl: false, prog_btn: "3", audio_jack: "3.5mm", ip: "IP55", hazloc: null, dims_mm: "88 x 63 x 26" },
    { desc: "Wireless RSM with battery and clip, no charger", part: "RLN6544", variants: ["4000","3000","2000","900"], impres: false, multi_mic: false, noise_type: "Windporting", viqi: false, vol_ctrl: true, orange_btn: false, ch_ctrl: false, prog_btn: "3", audio_jack: "3.5mm", ip: "IP55", hazloc: null, dims_mm: "88 x 63 x 26" }
  ],

  "Surveillance": [
    { desc: "1-wire receive-only earpiece, black", part: "PMLN6125", variants: ["4000","3000","1000"], impres: true, ear_type: "Ear hanger", mic_type: null, ptt: false, prog_btn: false, hazloc: "UL" },
    { desc: "1-wire receive-only earpiece, beige", part: "PMLN6126", variants: ["4000","3000","1000"], impres: true, ear_type: "Ear hanger", mic_type: null, ptt: false, prog_btn: false, hazloc: "UL" },
    { desc: "IMPRES 2-wire surveillance kit, programmable button, black", part: "PMLN6127", variants: ["4000","3000","1000"], impres: true, ear_type: "Ear hanger", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "IMPRES 2-wire surveillance kit, programmable button, beige", part: "PMLN6128", variants: ["4000","3000","1000"], impres: true, ear_type: "Ear hanger", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "IMPRES 2-wire surveillance kit with translucent tube, programmable button, black", part: "PMLN6129", variants: ["4000","3000","2000","1000","900"], impres: true, ear_type: "Clear rubber eartip", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "IMPRES 2-wire surveillance kit with translucent tube, programmable button, beige", part: "PMLN6130", variants: ["4000","3000","2000","1000","900"], impres: true, ear_type: "Clear rubber eartip", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "IMPRES 3-wire surveillance kit with translucent tube, programmable button, black", part: "PMLN6123", variants: ["4000","3000","2000","1000","1000i","900"], impres: true, ear_type: "Clear rubber eartip", mic_type: "Separate wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "IMPRES 3-wire surveillance kit with translucent tube, programmable button, beige", part: "PMLN6124", variants: ["4000","3000","2000","1000","1000i","900"], impres: true, ear_type: "Clear rubber eartip", mic_type: "Separate wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "1-wire receive-only surveillance kit with translucent tube, black, 3.5mm threaded (requires BDN6783)", part: "RLN5313", variants: ["4000","3000","2000","1000","1000i","900"], impres: false, ear_type: "Clear rubber eartip", mic_type: null, ptt: false, prog_btn: false, hazloc: "UL" },
    { desc: "2-wire surveillance kit with translucent tube, black, 3.5mm threaded (requires BDN6783)", part: "RLN5312", variants: ["4000","3000","2000","1000","1000i","900"], impres: false, ear_type: "Clear rubber eartip", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: false, hazloc: null },
    { desc: "2-wire surveillance kit with extra-loud earpiece, beige, 3.5mm threaded (requires BDN6783)", part: "BDN6669", variants: ["4000","3000","2000","1000","1000i","900"], impres: false, ear_type: "Ear hanger", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: false, hazloc: null },
    { desc: "IMPRES ear microphone with bone conduction and programmable button, black", part: "PMLN5653", variants: ["4000","3000","2000","1000","1000i","900"], impres: true, ear_type: "In-ear", mic_type: "Bone conduction", ptt: false, prog_btn: true, hazloc: null },
    { desc: "Operations critical wireless earpiece with 12 inch cable", part: "NNTN8125", variants: ["4000","2000","1000","900"], impres: false, ear_type: "Over-the-ear (CommPort)", mic_type: "Directional above earpiece", ptt: true, prog_btn: false, hazloc: null },
    { desc: "Operations critical wireless PTT pod with charger", part: "NNTN8127", variants: ["4000","2000","1000","900"], impres: false, ear_type: null, mic_type: null, ptt: true, prog_btn: false, hazloc: null },
    { desc: "Completely discreet earpiece kit with neckloop, beige (includes GMLN5261, RLN4920, RNN4005)", part: "PMLN7696", variants: ["4000","3000","2000","1000","1000i","900"], impres: false, ear_type: "Neckloop/nano receiver", mic_type: null, ptt: false, prog_btn: false, hazloc: null },
    { desc: "XBT operations critical wireless behind-the-neck headset", part: "RLN6490", variants: ["4000","3000","2000","900"], impres: false, ear_type: "Behind-the-neck headset", mic_type: "Boom", ptt: true, prog_btn: false, hazloc: null },
    { desc: "XBT operations critical wireless headband style headset", part: "RLN6491", variants: ["4000","3000","2000","900"], impres: false, ear_type: "Over-the-head headset", mic_type: "Boom", ptt: true, prog_btn: false, hazloc: null },
    { desc: "Bluetooth accessory kit with flexible earpiece, bluetooth pod and charging cradle with power supply", part: "RLN6500", variants: ["900"], impres: false, ear_type: "Over-the-ear (swivel)", mic_type: "Boom", ptt: true, prog_btn: false, hazloc: null }
  ],

  "Headsets": [
    { desc: "IMPRES temple transducer with boom microphone and in-line PTT", part: "PMLN5101", variants: ["4000","3000","2000","1000","1000i","900"], headset_type: "Behind-the-head", ear_style: "Bone conduction", nrr_db: null, mic_type: "Boom", hazloc: "UL" },
    { desc: "Earset D-shell", part: "PMLN5096", variants: ["4000","3000","2000","1000","1000i","900"], headset_type: "Over-the-ear", ear_style: "Single-ear", nrr_db: null, mic_type: "Boom", hazloc: "UL" },
    { desc: "Heavy-duty behind-the-head headset with noise-cancelling boom mic, NRR 24dB", part: "PMLN6852", variants: ["4000","3000","2000","1000","900"], headset_type: "Behind-the-head", ear_style: "Dual-ear", nrr_db: 24, mic_type: "Boom", hazloc: null },
    { desc: "Heavy-duty behind-the-head headset with noise-cancelling boom mic, NRR 24dB (UL)", part: "PMLN6853", variants: ["4000","3000","2000","1000","900"], headset_type: "Behind-the-head", ear_style: "Dual-ear", nrr_db: 24, mic_type: "Boom", hazloc: "UL" },
    { desc: "Heavy-duty over-the-head headset with noise-cancelling boom mic, NRR 24dB", part: "PMLN7466", variants: ["4000","3000","2000","1000","900"], headset_type: "Over-the-head", ear_style: "Dual-ear", nrr_db: 24, mic_type: "Boom", hazloc: null },
    { desc: "Heavy-duty over-the-head headset with noise-cancelling boom mic, NRR 24dB (UL)", part: "PMLN7467", variants: ["4000","3000","2000","1000","900"], headset_type: "Over-the-head", ear_style: "Dual-ear", nrr_db: 24, mic_type: "Boom", hazloc: "UL" },
    { desc: "Lightweight over-the-head single muff headset with in-line PTT and boom mic", part: "RMN5058", variants: ["4000","2000","1000","900"], headset_type: "Over-the-head", ear_style: "Single-ear", nrr_db: null, mic_type: "Boom", hazloc: "UL" }
  ],

  "Tactical": [
    { desc: "Tactical PTT/VOX interface module", part: "PMLN6765", variants: ["4000","3000","2000"], headset_type: "Interface module", ear_style: null, nrr_db: null, mic_type: null, hazloc: null },
    { desc: "Tactical PTT only interface module", part: "PMLN6827", variants: ["4000","3000","2000"], headset_type: "Interface module", ear_style: null, nrr_db: null, mic_type: null, hazloc: null },
    { desc: "Tactical boomless temple transducer (requires PMLN6765 or PMLN6827)", part: "PMLN6766", variants: ["4000","3000","2000"], headset_type: "Over-the-head", ear_style: "Bone conduction", nrr_db: null, mic_type: "Noise-cancelling", hazloc: null },
    { desc: "Tactical throat microphone (requires PMLN6765 or PMLN6827)", part: "PMLN6828", variants: ["4000","3000","2000"], headset_type: "Neckband", ear_style: "Earbud", nrr_db: null, mic_type: "Noise-cancelling throat mic", hazloc: null },
    { desc: "Tactical ear microphone (requires PMLN6765 or PMLN6827)", part: "PMLN6829", variants: ["4000","3000","2000"], headset_type: "In-ear", ear_style: "In-ear", nrr_db: null, mic_type: "Noise-cancelling", hazloc: null },
    { desc: "Tactical temple transducer / boom mic (requires PMLN6765 or PMLN6827)", part: "PMLN6833", variants: ["4000","3000","2000"], headset_type: "Over-the-head", ear_style: "Bone conduction", nrr_db: null, mic_type: "Noise-cancelling boom", hazloc: null },
    { desc: "Tactical remote body PTT (for use with PMLN6765 or PMLN6827)", part: "PMLN6767", variants: ["4000","3000","2000"], headset_type: "PTT accessory", ear_style: null, nrr_db: null, mic_type: null, hazloc: null },
    { desc: "Tactical remote ring PTT (for use with PMLN6765 or PMLN6827)", part: "PMLN6830", variants: ["4000","3000","2000"], headset_type: "PTT accessory", ear_style: null, nrr_db: null, mic_type: null, hazloc: null }
  ],

  "Wireless": [
    { desc: "Operations critical wireless earpiece with 12 inch cable", part: "NNTN8125", variants: ["4000","2000","1000","900"], ear_type: "Over-the-ear (CommPort)", mic_type: "Directional above earpiece", ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
    { desc: "Operations critical wireless PTT pod with charger", part: "NNTN8127", variants: ["4000","2000","1000","900"], ear_type: null, mic_type: null, ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
    { desc: "XBT operations critical wireless behind-the-neck headset", part: "RLN6490", variants: ["4000","3000","2000","900"], ear_type: "Behind-the-neck dual-ear", mic_type: "Boom", ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
    { desc: "XBT operations critical wireless headband style headset", part: "RLN6491", variants: ["4000","3000","2000","900"], ear_type: "Over-the-head dual-ear", mic_type: "Boom", ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
    { desc: "Bluetooth accessory kit with flexible earpiece, bluetooth pod and charging cradle", part: "RLN6500", variants: ["900"], ear_type: "Over-the-ear (swivel)", mic_type: "Boom", ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null }
  ],

  "Batteries": [
    { desc: "IMPRES Li-Ion 2000 mAh slim battery, IP67", part: "NNTN8128", variants: ["4000","3000","2000","1000","1000i","900"], impres: true, chem: "Li-Ion", capacity_mah: 2000, dims_mm: "115 x 52 x 18", weight_g: 160, hazloc: null, ip: "IP67", op_temp: "-20C to +60C" },
    { desc: "IMPRES Li-Ion 2800 mAh battery, IP68", part: "PMNN4448", variants: ["4000","3000","2000","1000","1000i","900"], impres: true, chem: "Li-Ion", capacity_mah: 2800, dims_mm: "115 x 52 x 23", weight_g: 170, hazloc: null, ip: "IP68", op_temp: "-10C to +60C" },
    { desc: "IMPRES Li-Ion 2500 mAh battery, IP68 (UL)", part: "NNTN8560", variants: ["4000","3000","2000","1000"], impres: true, chem: "Li-Ion", capacity_mah: 2500, dims_mm: "113 x 52 x 23", weight_g: 195, hazloc: "UL", ip: "IP68", op_temp: "-10C to +60C" },
    { desc: "IMPRES Li-Ion 2900 mAh battery, IP68 (UL)", part: "PMNN4489", variants: ["1000i","900"], impres: true, chem: "Li-Ion", capacity_mah: 2900, dims_mm: "115 x 52 x 23", weight_g: 170, hazloc: "UL", ip: "IP68", op_temp: "-10C to +60C" },
    { desc: "IMPRES Li-Ion 2100 mAh battery, IP68", part: "PMNN4491", variants: ["1000i","900"], impres: true, chem: "Li-Ion", capacity_mah: 2100, dims_mm: "115 x 52 x 18", weight_g: 160, hazloc: null, ip: "IP68", op_temp: "-10C to +60C" },
    { desc: "IMPRES Li-Ion 3000 mAh battery, IP68", part: "PMNN4493", variants: ["1000i","900"], impres: true, chem: "Li-Ion", capacity_mah: 3000, dims_mm: "115 x 52 x 23", weight_g: 170, hazloc: null, ip: "IP68", op_temp: "-10C to +60C" },
    { desc: "IMPRES Li-Ion 1300 mAh slim battery, IP67", part: "NNTN8305", variants: ["3000"], impres: true, chem: "Li-Ion", capacity_mah: 1300, dims_mm: "115 x 52 x 14", weight_g: 98, hazloc: null, ip: "IP67", op_temp: "-10C to +60C" }
  ],

  "Chargers": [
    { desc: "IMPRES single-unit charger, US/NA 115V", part: "PMPN4576", variants: ["4000","3000","2000","1000","900"], impres: true, chem: "Li-Ion, NiMH", pwr_src: "115VAC", dims_mm: "51 x 88 x 94", pockets: 1 },
    { desc: "IMPRES 2 multi-unit fast charger with 1 display, US/NA", part: "PMPN4284", variants: ["4000","3000","2000","1000","900"], impres: true, chem: "Li-Ion, NiMH", pwr_src: "100-240VAC", dims_mm: "117 x 444 x 170", pockets: 6 },
    { desc: "IMPRES single-unit rapid rate vehicular charger", part: "NNTN7616", variants: ["4000","3000","2000","1000","900"], impres: true, chem: "Li-Ion, NiMH", pwr_src: "12VDC hardwire", dims_mm: "82 x 97 x 200", pockets: 1 },
    { desc: "Travel charger with vehicular adapter, mounting bracket and coil cord", part: "NNTN8525", variants: ["4000","3000","2000","1000","900"], impres: false, chem: "Li-Ion, NiMH", pwr_src: "12VDC adapter", dims_mm: "64 x 67 x 57", pockets: 1 }
  ],

  "Carry": [
    { desc: "Leather carry case with 2.75 inch swivel belt loop, for one-knob radios", part: "PMLN6085", variants: ["4000","2000","1000"], material: "Hard leather", belt_sz: "2.75 inch", swivel: true, d_rings: true, compatible_batteries: [] },
    { desc: "Leather carry case with 2.75 inch swivel belt loop, for two-knob radios", part: "PMLN7182", variants: ["4000","2000","1000"], material: "Hard leather", belt_sz: "2.75 inch", swivel: true, d_rings: false, compatible_batteries: [] },
    { desc: "Covert carry holster", part: "PMLN6327", variants: ["3000"], material: "Plastic", belt_sz: "3 inch", swivel: false, d_rings: false, compatible_batteries: ["All"] },
    { desc: "Leather carry case with 3 inch fixed belt loop", part: "PMLN5838", variants: ["900"], material: "Hard leather", belt_sz: "3 inch", swivel: false, d_rings: false, compatible_batteries: ["PMNN4424","PMNN4491","PMNN4493","PMNN4489","PMNN4448","NNTN8128"] },
    { desc: "Leather carry case with 2.5 inch swivel belt loop", part: "PMLN5842", variants: ["900"], material: "Hard leather", belt_sz: "2.5 inch", swivel: true, d_rings: false, compatible_batteries: [] },
    { desc: "Leather carry case with 3 inch swivel belt loop", part: "PMLN5840", variants: ["900"], material: "Hard leather", belt_sz: "3 inch", swivel: true, d_rings: false, compatible_batteries: [] },
    { desc: "Nylon carry case with 3 inch fixed belt loop", part: "PMLN5844", variants: ["900"], material: "Nylon", belt_sz: "3 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "2 inch hard plastic belt clip", part: "PMLN4651", variants: ["4000","2000","1000","900"], material: "Plastic", belt_sz: "2 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "2.5 inch hard plastic belt clip", part: "PMLN7008", variants: ["4000","2000","1000","900"], material: "Plastic", belt_sz: "2.5 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Accessory connector dust cover", part: "15012157001", variants: ["4000","2000","1000","900"], material: null, belt_sz: null, swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Replacement 2.5 inch leather swivel belt loop", part: "PMLN5610", variants: ["900"], material: "Hard leather", belt_sz: "2.5 inch", swivel: true, d_rings: false, compatible_batteries: [] },
    { desc: "Replacement 3 inch leather swivel belt loop", part: "PMLN5611", variants: ["900"], material: "Hard leather", belt_sz: "3 inch", swivel: true, d_rings: false, compatible_batteries: [] },
    { desc: "1.75 inch wide leather belt", part: "4200865599", variants: ["4000","2000"], material: "Leather", belt_sz: "Up to 41 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Adjustable nylon carrying strap", part: "NTN5243", variants: ["4000","2000"], material: "Nylon", belt_sz: "Up to 36 inch", swivel: false, d_rings: false, compatible_batteries: [] }
  ],

  "Antennas": [
    { desc: "700/800 MHz GPS whip antenna", part: "NAF5085", variants: ["4000","3000","2000","1000","1000i"], band: "700/800", freq_mhz: "764-870", len_cm: 20.3, ant_type: "Whip", gps: true, hazloc: "UL" },
    { desc: "UHF GPS whip antenna", part: "PMAE4065", variants: ["4000","3000","2000","1000","1000i"], band: "UHF", freq_mhz: "380-520", len_cm: 14.2, ant_type: "Whip", gps: true, hazloc: "UL" },
    { desc: "VHF GPS whip antenna", part: "NAR6593", variants: ["4000","3000","2000","1000","1000i"], band: "VHF", freq_mhz: "136-174", len_cm: 20, ant_type: "Whip", gps: true, hazloc: "UL" },
    { desc: "1/4 wave 700/800 MHz GPS stubby antenna", part: "NAR6595", variants: ["4000","3000","2000","1000","1000i"], band: "700/800", freq_mhz: "764-870", len_cm: 9.8, ant_type: "Stubby", gps: true, hazloc: "UL" },
    { desc: "UHF range 1 GPS stubby antenna", part: "FAF5259", variants: ["4000","3000","2000","1000","1000i"], band: "UHF", freq_mhz: "380-470", len_cm: 9.3, ant_type: "Stubby", gps: true, hazloc: "UL" },
    { desc: "UHF range 2 GPS stubby antenna", part: "FAF5260", variants: ["4000","3000","2000","1000","1000i"], band: "UHF", freq_mhz: "470-520", len_cm: 9.3, ant_type: "Stubby", gps: true, hazloc: "UL" },
    { desc: "700/800 MHz GPS whip antenna (APX 4000 and APX 2000)", part: "PMAF4040", variants: ["4000","2000"], band: "700/800", freq_mhz: "764-870", len_cm: 20.3, ant_type: "Whip", gps: true, hazloc: "UL" },
    { desc: "900 MHz GPS antenna", part: "PMAF4008", variants: ["4000","2000"], band: "800/900", freq_mhz: "896-941", len_cm: 18, ant_type: "Whip", gps: true, hazloc: null },
    { desc: "800/900 MHz GPS combination helical antenna", part: "PMAF4003", variants: ["4000","2000"], band: "800/900", freq_mhz: "806-941", len_cm: 18, ant_type: "Helical", gps: true, hazloc: "UL" },
    { desc: "Flexible antenna with one spacer, 700/800 MHz", part: "PMAF4006", variants: ["3000"], band: "700/800", freq_mhz: "764-870", len_cm: 41, ant_type: "Flexible", gps: true, hazloc: null },
    { desc: "Flexible antenna with three spacers, UHF", part: "PMAE4080", variants: ["3000"], band: "UHF", freq_mhz: "308-470", len_cm: 77, ant_type: "Flexible", gps: true, hazloc: null },
    { desc: "Flexible antenna with two spacers, VHF", part: "PMAD4125", variants: ["3000"], band: "VHF", freq_mhz: "136-174", len_cm: 44, ant_type: "Flexible", gps: true, hazloc: null },
    { desc: "UHF flexible whip antenna", part: "PMAE4022", variants: ["900"], band: "UHF", freq_mhz: "403-470", len_cm: 16, ant_type: "Flexible whip", gps: false, hazloc: "UL" },
    { desc: "VHF 136-147 MHz stubby antenna", part: "PMAD4093", variants: ["900"], band: "VHF", freq_mhz: "136-147", len_cm: 11, ant_type: "Stubby", gps: false, hazloc: "UL" },
    { desc: "VHF 147-160 MHz stubby antenna", part: "PMAD4094", variants: ["900"], band: "VHF", freq_mhz: "147-160", len_cm: 11, ant_type: "Stubby", gps: false, hazloc: "UL" },
    { desc: "VHF 160-174 MHz stubby antenna", part: "PMAD4095", variants: ["900"], band: "VHF", freq_mhz: "160-174", len_cm: 11, ant_type: "Stubby", gps: false, hazloc: "UL" },
    { desc: "700/800 MHz flexible whip antenna", part: "NAF5080", variants: ["900"], band: "700/800", freq_mhz: "764-870", len_cm: 6.5, ant_type: "Flexible whip", gps: false, hazloc: null },
    { desc: "VHF 136-174 MHz flexible wideband antenna", part: "PMAD4088", variants: ["900"], band: "VHF", freq_mhz: "136-174", len_cm: 8.3, ant_type: "Flexible whip", gps: false, hazloc: "UL" },
    { desc: "700/800 MHz stubby antenna", part: "PMAF4022", variants: ["900"], band: "700/800", freq_mhz: "764-870", len_cm: 9, ant_type: "Stubby", gps: false, hazloc: null },
    { desc: "UHF 380-470 MHz stubby antenna", part: "PMAE4100", variants: ["900"], band: "UHF", freq_mhz: "380-470", len_cm: 9, ant_type: "Stubby", gps: false, hazloc: "UL" },
    { desc: "UHF 450-527 MHz stubby antenna", part: "PMAE4102", variants: ["900"], band: "UHF", freq_mhz: "450-527", len_cm: 9, ant_type: "Stubby", gps: false, hazloc: "UL" }
  ],

  "Cables": [
    { desc: "Programming and test cable", part: "PMKN4013", variants: ["4000","3000","2000","1000","1000i","900"] },
    { desc: "Programming cable", part: "PMKN4012", variants: ["4000","3000","2000","1000","1000i","900"] }
  ]
};

if (typeof module !== "undefined") module.exports = APX_COMPACT_DATA;
