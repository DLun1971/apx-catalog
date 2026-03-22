// apx-7000-data.js
// Variants: APX 7000, APX 7000XE
// Source: APX Radio Accessories Catalog 2026

const APX7000_DATA = {
  variants: ["7000", "7000XE"],

  "RSM": [
    { desc: "XVP850 RSM with channel knob (TAA compliant)", part: "PMMN4135_TAA", variants: ["7000","7000XE"], impres: true, multi_mic: true, noise_type: "Multi-mic noise suppression", viqi: false, vol_ctrl: false, orange_btn: false, ch_ctrl: true, prog_btn: "3", audio_jack: "3.5mm", ip: "IP68", hazloc: "UL", dims_mm: "93 x 58 x 31" },
    { desc: "XVP830 RSM without channel knob (TAA compliant)", part: "PMMN4136_TAA", variants: ["7000","7000XE"], impres: true, multi_mic: true, noise_type: "Multi-mic noise suppression", viqi: false, vol_ctrl: false, orange_btn: false, ch_ctrl: false, prog_btn: "3", audio_jack: "3.5mm", ip: "IP68", hazloc: "UL", dims_mm: "93 x 58 x 31" },
    { desc: "XVP850 RSM with channel knob", part: "PMMN4135", variants: ["7000","7000XE"], impres: true, multi_mic: true, noise_type: "Multi-mic noise suppression", viqi: false, vol_ctrl: false, orange_btn: false, ch_ctrl: true, prog_btn: "3", audio_jack: "3.5mm", ip: "IP68", hazloc: "UL", dims_mm: "93 x 58 x 31" },
    { desc: "XVP830 RSM without channel knob", part: "PMMN4136", variants: ["7000","7000XE"], impres: true, multi_mic: true, noise_type: "Multi-mic noise suppression", viqi: false, vol_ctrl: false, orange_btn: false, ch_ctrl: false, prog_btn: "3", audio_jack: "3.5mm", ip: "IP68", hazloc: "UL", dims_mm: "93 x 58 x 31" },
    { desc: "IMPRES windporting RSM with volume toggle, orange button, 3.5mm jack (IP68)", part: "PMMN4099", variants: ["7000","7000XE"], impres: true, multi_mic: false, noise_type: "Windporting", viqi: false, vol_ctrl: true, orange_btn: true, ch_ctrl: false, prog_btn: "1", audio_jack: "3.5mm", ip: "IP68", hazloc: "UL", dims_mm: "60 x 78 x 28" },
    { desc: "WM800 wireless RSM (with battery and USB charging cable)", part: "PMMN4158", variants: ["7000","7000XE"], impres: true, multi_mic: true, noise_type: "Multi-mic noise suppression", viqi: false, vol_ctrl: true, orange_btn: false, ch_ctrl: false, prog_btn: "3", audio_jack: "3.5mm", ip: "IP68", hazloc: "UL", dims_mm: "67.5 x 98 x 32" },
    { desc: "Wireless RSM with battery, clip and dual unit charger", part: "RLN6554", variants: ["7000","7000XE"], impres: false, multi_mic: false, noise_type: "Windporting", viqi: false, vol_ctrl: true, orange_btn: false, ch_ctrl: false, prog_btn: "3", audio_jack: "3.5mm", ip: "IP55", hazloc: null, dims_mm: "88 x 63 x 26" },
    { desc: "Wireless RSM with battery and clip, no charger", part: "RLN6544", variants: ["7000","7000XE"], impres: false, multi_mic: false, noise_type: "Windporting", viqi: false, vol_ctrl: true, orange_btn: false, ch_ctrl: false, prog_btn: "3", audio_jack: "3.5mm", ip: "IP55", hazloc: null, dims_mm: "88 x 63 x 26" },
    { desc: "Public safety microphone, 30 inch cable (antenna required, VHF not supported)", part: "PMMN4061", variants: ["7000","7000XE"], impres: true, multi_mic: false, noise_type: "Windporting", viqi: false, vol_ctrl: true, orange_btn: true, ch_ctrl: false, prog_btn: "1", audio_jack: "3.5mm", ip: "IP55", hazloc: "UL", dims_mm: "60 x 78 x 28" },
    { desc: "Public safety microphone, 24 inch cable (antenna required, VHF not supported)", part: "PMMN4060", variants: ["7000","7000XE"], impres: true, multi_mic: false, noise_type: "Windporting", viqi: false, vol_ctrl: true, orange_btn: true, ch_ctrl: false, prog_btn: "1", audio_jack: "3.5mm", ip: "IP55", hazloc: "UL", dims_mm: "60 x 78 x 28" },
    { desc: "Public safety microphone, 18 inch cable (antenna required, VHF not supported)", part: "PMMN4059", variants: ["7000","7000XE"], impres: true, multi_mic: false, noise_type: "Windporting", viqi: false, vol_ctrl: true, orange_btn: true, ch_ctrl: false, prog_btn: "1", audio_jack: "3.5mm", ip: "IP55", hazloc: "UL", dims_mm: "60 x 78 x 28" }
  ],

  "Surveillance": [
    { desc: "1-wire receive-only earpiece, black", part: "PMLN6125", variants: ["7000","7000XE"], impres: true, ear_type: "Ear hanger", mic_type: null, ptt: false, prog_btn: false, hazloc: "UL" },
    { desc: "1-wire receive-only earpiece, beige", part: "PMLN6126", variants: ["7000","7000XE"], impres: true, ear_type: "Ear hanger", mic_type: null, ptt: false, prog_btn: false, hazloc: "UL" },
    { desc: "IMPRES 2-wire surveillance kit, programmable button, black", part: "PMLN6127", variants: ["7000","7000XE"], impres: true, ear_type: "Ear hanger", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "IMPRES 2-wire surveillance kit, programmable button, beige", part: "PMLN6128", variants: ["7000","7000XE"], impres: true, ear_type: "Ear hanger", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "IMPRES 2-wire surveillance kit with translucent tube, programmable button, black", part: "PMLN6129", variants: ["7000","7000XE"], impres: true, ear_type: "Clear rubber eartip", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "IMPRES 2-wire surveillance kit with translucent tube, programmable button, beige", part: "PMLN6130", variants: ["7000","7000XE"], impres: true, ear_type: "Clear rubber eartip", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "IMPRES 3-wire surveillance kit with translucent tube, programmable button, black", part: "PMLN6123", variants: ["7000","7000XE"], impres: true, ear_type: "Clear rubber eartip", mic_type: "Separate wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "IMPRES 3-wire surveillance kit with translucent tube, programmable button, beige", part: "PMLN6124", variants: ["7000","7000XE"], impres: true, ear_type: "Clear rubber eartip", mic_type: "Separate wire", ptt: true, prog_btn: true, hazloc: "UL" },
    { desc: "1-wire receive-only surveillance kit with translucent tube, black, 3.5mm threaded (requires BDN6783)", part: "RLN5313", variants: ["7000","7000XE"], impres: false, ear_type: "Clear rubber eartip", mic_type: null, ptt: false, prog_btn: false, hazloc: "UL" },
    { desc: "2-wire surveillance kit with translucent tube, black, 3.5mm threaded (requires BDN6783)", part: "RLN5312", variants: ["7000","7000XE"], impres: false, ear_type: "Clear rubber eartip", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: false, hazloc: null },
    { desc: "2-wire surveillance kit with extra-loud earpiece, beige, 3.5mm threaded (requires BDN6783)", part: "BDN6669", variants: ["7000","7000XE"], impres: false, ear_type: "Ear hanger", mic_type: "Mic and PTT combined on single wire", ptt: true, prog_btn: false, hazloc: null },
    { desc: "IMPRES ear microphone with bone conduction and programmable button, black", part: "PMLN5653", variants: ["7000","7000XE"], impres: true, ear_type: "In-ear", mic_type: "Bone conduction", ptt: false, prog_btn: true, hazloc: null },
    { desc: "Mission critical wireless earpiece with 12 inch cable and PTT pod", part: "NTN2570", variants: ["7000","7000XE"], impres: false, ear_type: "Over-the-ear (CommPort)", mic_type: "Directional above earpiece", ptt: true, prog_btn: false, hazloc: null },
    { desc: "Mission critical wireless PTT pod (with power supply and USB charging cable)", part: "NTN2571", variants: ["7000","7000XE"], impres: false, ear_type: null, mic_type: null, ptt: true, prog_btn: false, hazloc: null },
    { desc: "Completely discreet earpiece kit with neckloop, beige (includes GMLN5261, RLN4920, RNN4005)", part: "PMLN7696", variants: ["7000","7000XE"], impres: false, ear_type: "Neckloop/nano receiver", mic_type: null, ptt: false, prog_btn: false, hazloc: null },
    { desc: "XBT operations critical wireless behind-the-neck headset", part: "RLN6490", variants: ["7000","7000XE"], impres: false, ear_type: "Behind-the-neck headset", mic_type: "Boom", ptt: true, prog_btn: false, hazloc: null },
    { desc: "XBT operations critical wireless headband style headset", part: "RLN6491", variants: ["7000","7000XE"], impres: false, ear_type: "Over-the-head headset", mic_type: "Boom", ptt: true, prog_btn: false, hazloc: null }
  ],

  "Headsets": [
    { desc: "IMPRES temple transducer with boom microphone and in-line PTT", part: "PMLN5101", variants: ["7000","7000XE"], headset_type: "Behind-the-head", ear_style: "Bone conduction", nrr_db: null, mic_type: "Boom", hazloc: "UL" },
    { desc: "Earset D-shell", part: "PMLN5096", variants: ["7000","7000XE"], headset_type: "Over-the-ear", ear_style: "Single-ear", nrr_db: null, mic_type: "Boom", hazloc: "UL" },
    { desc: "Heavy-duty behind-the-head headset with noise-cancelling boom mic, NRR 24dB", part: "PMLN6852", variants: ["7000","7000XE"], headset_type: "Behind-the-head", ear_style: "Dual-ear", nrr_db: 24, mic_type: "Boom", hazloc: null },
    { desc: "Heavy-duty behind-the-head headset with noise-cancelling boom mic, NRR 24dB (UL)", part: "PMLN6853", variants: ["7000","7000XE"], headset_type: "Behind-the-head", ear_style: "Dual-ear", nrr_db: 24, mic_type: "Boom", hazloc: "UL" },
    { desc: "Heavy-duty over-the-head headset with noise-cancelling boom mic, NRR 24dB", part: "PMLN7466", variants: ["7000","7000XE"], headset_type: "Over-the-head", ear_style: "Dual-ear", nrr_db: 24, mic_type: "Boom", hazloc: null },
    { desc: "Heavy-duty over-the-head headset with noise-cancelling boom mic, NRR 24dB (UL)", part: "PMLN7467", variants: ["7000","7000XE"], headset_type: "Over-the-head", ear_style: "Dual-ear", nrr_db: 24, mic_type: "Boom", hazloc: "UL" },
    { desc: "Lightweight over-the-head single muff headset with in-line PTT and boom mic", part: "RMN5058", variants: ["7000","7000XE"], headset_type: "Over-the-head", ear_style: "Single-ear", nrr_db: null, mic_type: "Boom", hazloc: "UL" }
  ],

  "Tactical": [
    { desc: "Tactical PTT/VOX interface module", part: "PMLN6765", variants: ["7000","7000XE"], headset_type: "Interface module", ear_style: null, nrr_db: null, mic_type: null, hazloc: null },
    { desc: "Tactical PTT only interface module", part: "PMLN6827", variants: ["7000","7000XE"], headset_type: "Interface module", ear_style: null, nrr_db: null, mic_type: null, hazloc: null },
    { desc: "Tactical boomless temple transducer (requires PMLN6765 or PMLN6827)", part: "PMLN6766", variants: ["7000","7000XE"], headset_type: "Over-the-head", ear_style: "Bone conduction", nrr_db: null, mic_type: "Noise-cancelling", hazloc: null },
    { desc: "Tactical throat microphone (requires PMLN6765 or PMLN6827)", part: "PMLN6828", variants: ["7000","7000XE"], headset_type: "Neckband", ear_style: "Earbud", nrr_db: null, mic_type: "Noise-cancelling throat mic", hazloc: null },
    { desc: "Tactical ear microphone (requires PMLN6765 or PMLN6827)", part: "PMLN6829", variants: ["7000","7000XE"], headset_type: "In-ear", ear_style: "In-ear", nrr_db: null, mic_type: "Noise-cancelling", hazloc: null },
    { desc: "Tactical temple transducer / boom mic (requires PMLN6765 or PMLN6827)", part: "PMLN6833", variants: ["7000","7000XE"], headset_type: "Over-the-head", ear_style: "Bone conduction", nrr_db: null, mic_type: "Noise-cancelling boom", hazloc: null },
    { desc: "Tactical remote body PTT (for use with PMLN6765 or PMLN6827)", part: "PMLN6767", variants: ["7000","7000XE"], headset_type: "PTT accessory", ear_style: null, nrr_db: null, mic_type: null, hazloc: null },
    { desc: "Tactical remote ring PTT (for use with PMLN6765 or PMLN6827)", part: "PMLN6830", variants: ["7000","7000XE"], headset_type: "PTT accessory", ear_style: null, nrr_db: null, mic_type: null, hazloc: null },
    { desc: "PTT nexus adapter (requires 3M Peltor CH headset)", part: "PMLN6095", variants: ["7000","7000XE"], headset_type: "PTT adapter", ear_style: null, nrr_db: null, mic_type: null, hazloc: null }
  ],

  "Wireless": [
    { desc: "Mission critical wireless earpiece with 12 inch cable and PTT pod", part: "NTN2570", variants: ["7000","7000XE"], ear_type: "Over-the-ear (CommPort)", mic_type: "Directional above earpiece", ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
    { desc: "Mission critical wireless PTT pod (with power supply and USB charging cable)", part: "NTN2571", variants: ["7000","7000XE"], ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
    { desc: "XBT operations critical wireless behind-the-neck headset", part: "RLN6490", variants: ["7000","7000XE"], ear_type: "Behind-the-neck dual-ear", mic_type: "Boom", ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
    { desc: "XBT operations critical wireless headband style headset", part: "RLN6491", variants: ["7000","7000XE"], ear_type: "Over-the-head dual-ear", mic_type: "Boom", ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null }
  ],

  "Batteries": [
    { desc: "IMPRES 2 Li-Ion 3400 mAh battery, IP68 rugged", part: "PMNN4486", variants: ["7000","7000XE"], impres: true, chem: "Li-Ion", capacity_mah: 3400, dims_mm: "86 x 59 x 42", weight_g: 185, hazloc: null, ip: "IP68", op_temp: "-20C to +60C" },
    { desc: "IMPRES 2 Li-Ion 2550 mAh battery, IP68 rugged", part: "PMNN4485", variants: ["7000","7000XE"], impres: true, chem: "Li-Ion", capacity_mah: 2550, dims_mm: "86 x 59 x 37", weight_g: 150, hazloc: null, ip: "IP68", op_temp: "-20C to +60C" },
    { desc: "IMPRES 2 Li-Ion 4850 mAh battery, IP68 rugged, -30C rated", part: "PMNN4487", variants: ["7000","7000XE"], impres: true, chem: "Li-Ion", capacity_mah: 4850, dims_mm: "130 x 59 x 42", weight_g: 320, hazloc: null, ip: "IP68", op_temp: "-30C to +60C" },
    { desc: "IMPRES 2 Li-Ion 5100 mAh battery, IP68 rugged", part: "PMNN4494", variants: ["7000","7000XE"], impres: true, chem: "Li-Ion", capacity_mah: 5100, dims_mm: "130 x 59 x 42", weight_g: 320, hazloc: null, ip: "IP68", op_temp: "-20C to +60C" },
    { desc: "APX clamshell battery pack IP57, requires 12 AA Alkaline or Lithium batteries (not included)", part: "PMNN4439", variants: ["7000","7000XE"], impres: false, chem: "AA Alkaline/Lithium", capacity_mah: null, dims_mm: "164 x 64 x 58", weight_g: null, hazloc: null, ip: "IP57", op_temp: null }
  ],

  "Chargers": [
    { desc: "IMPRES 2 single-unit fast charger, US/NA 115V", part: "NNTN8860", variants: ["7000","7000XE"], impres: true, chem: "Li-Ion, NiMH", pwr_src: "115VAC", dims_mm: "75 x 100 x 125", pockets: 1 },
    { desc: "IMPRES 2 single-unit fast charger, 115V, TAA compliant", part: "NNTN8860_TAA", variants: ["7000","7000XE"], impres: true, chem: "Li-Ion, NiMH", pwr_src: "115VAC", dims_mm: "75 x 100 x 125", pockets: 1 },
    { desc: "IMPRES 2 single-unit fast charger, US/NA/LA 115V", part: "NNTN8863", variants: ["7000","7000XE"], impres: true, chem: "Li-Ion, NiMH", pwr_src: "100-240VAC", dims_mm: "75 x 100 x 125", pockets: 1 },
    { desc: "IMPRES 2 multi-unit fast charger with 6 displays and 6 USB ports, US/NA", part: "NNTN8844", variants: ["7000","7000XE"], impres: true, chem: "Li-Ion, NiMH", pwr_src: "100-240VAC", dims_mm: "153 x 445 x 292", pockets: 6 },
    { desc: "IMPRES single-unit rapid rate vehicular charger", part: "NNTN7624", variants: ["7000","7000XE"], impres: true, chem: "Li-Ion, NiMH", pwr_src: "12VDC hardwire", dims_mm: "82 x 97 x 200", pockets: 1 },
    { desc: "Travel charger with vehicular adapter, mounting bracket and coil cord", part: "RLN6434", variants: ["7000","7000XE"], impres: false, chem: "Li-Ion, NiMH", pwr_src: "12VDC adapter", dims_mm: "67 x 67 x 70", pockets: 1 }
  ],

  "Carry": [
    { desc: "Carry holder for 1.5, 2.5 and 3.5 model radios", part: "PMLN5331", variants: ["7000"], material: "Plastic", belt_sz: "3 inch", swivel: false, d_rings: false, compatible_batteries: ["All"] },
    { desc: "Carry holder for 1.5, 2.5 and 3.5 model radios", part: "PMLN6102", variants: ["7000XE"], material: "Plastic", belt_sz: "3 inch", swivel: false, d_rings: false, compatible_batteries: ["All"] },
    { desc: "Leather carry case with 3 inch fixed belt loop", part: "PMLN5323", variants: ["7000"], material: "Hard leather", belt_sz: "3 inch", swivel: false, d_rings: true, compatible_batteries: ["PMNN4485","PMNN4486"] },
    { desc: "Leather carry case with 3 inch fixed belt loop", part: "PMLN5326", variants: ["7000"], material: "Hard leather", belt_sz: "3 inch", swivel: false, d_rings: true, compatible_batteries: ["NNTN7033","NNTN7034","NNTN8921","PMNN4487","PMNN4494"] },
    { desc: "Leather carry case with D-rings and 2.75 inch swivel belt loop", part: "PMLN5324", variants: ["7000"], material: "Hard leather", belt_sz: "2.75 inch", swivel: true, d_rings: true, compatible_batteries: ["NNTN7038","NNTN8092","NNTN8930","PMNN4485","PMNN4486"] },
    { desc: "Leather carry case with D-rings and 2.75 inch swivel belt loop", part: "PMLN5327", variants: ["7000"], material: "Hard leather", belt_sz: "2.75 inch", swivel: true, d_rings: true, compatible_batteries: ["NNTN7033","NNTN7034"] },
    { desc: "Leather carry case with D-rings and 2.75 inch swivel belt loop", part: "PMLN5330", variants: ["7000"], material: "Hard leather", belt_sz: "2.75 inch", swivel: true, d_rings: true, compatible_batteries: ["NNTN7035","NNTN7036","NNTN7037","NNTN7573"] },
    { desc: "Dual display radio flip leather carry case with 2.75 inch swivel belt loop", part: "PMLN5560", variants: ["7000"], material: "Hard leather", belt_sz: "2.75 inch", swivel: true, d_rings: true, compatible_batteries: ["NNTN7038","NNTN8092"] },
    { desc: "Leather carry case with 3 inch fixed belt loop", part: "NNTN8112", variants: ["7000XE"], material: "Hard leather", belt_sz: "3 inch", swivel: false, d_rings: true, compatible_batteries: ["NNTN7038","NNTN8092"] },
    { desc: "Leather carry case with 3 inch fixed belt loop", part: "NNTN8114", variants: ["7000XE"], material: "Hard leather", belt_sz: "3 inch", swivel: false, d_rings: true, compatible_batteries: ["NNTN7033","NNTN7034"] },
    { desc: "Leather carry case with 3 inch fixed belt loop", part: "NNTN8116", variants: ["7000XE"], material: "Hard leather", belt_sz: "3 inch", swivel: false, d_rings: true, compatible_batteries: ["NNTN7035","NNTN7036","NNTN7037","NNTN7573"] },
    { desc: "Leather carry case with 2.75 inch swivel belt loop", part: "NNTN8111", variants: ["7000XE"], material: "Hard leather", belt_sz: "2.75 inch", swivel: true, d_rings: false, compatible_batteries: [] },
    { desc: "Leather carry case with D-rings and 2.75 inch swivel belt loop", part: "NNTN8113", variants: ["7000XE"], material: "Hard leather", belt_sz: "2.75 inch", swivel: true, d_rings: true, compatible_batteries: ["NNTN7033","NNTN7034","PMNN4487","PMNN4494","NNTN8921"] },
    { desc: "Leather carry case with D-rings and 2.75 inch swivel belt loop", part: "NNTN8115", variants: ["7000XE"], material: "Hard leather", belt_sz: "2.75 inch", swivel: true, d_rings: true, compatible_batteries: ["NNTN7035","NNTN7036","NNTN7037","NNTN7573"] },
    { desc: "Boston leather carry case with D-rings (requires radio strap AY000223A01, AY000229A01, RLN6486 or RLN6487)", part: "AY000222A01", variants: ["7000XE"], material: "Hard leather", belt_sz: null, swivel: false, d_rings: true, compatible_batteries: [] },
    { desc: "Molded nylon carry case with quick disconnect swivel and adjustable lanyard", part: "PMLN6802", variants: ["7000","7000XE"], material: "Nylon", belt_sz: null, swivel: true, d_rings: false, compatible_batteries: ["All"] },
    { desc: "Universal carry holster", part: "PMLN7732", variants: ["7000"], material: "Plastic", belt_sz: "2.5 inch", swivel: false, d_rings: false, compatible_batteries: ["PMNN4486","PMNN4485","PMNN4487","PMNN4494","NNTN8930","NNTN8921","PMNN4504","PMNN4505","NNTN7036","NNTN7035","PMMN4439"] },
    { desc: "Nylon carry case with 3 inch fixed belt loop", part: "PMLN5322", variants: ["7000"], material: "Nylon", belt_sz: "3 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Nylon carry case with 3 inch fixed belt loop", part: "PMLN5325", variants: ["7000"], material: "Nylon", belt_sz: "3 inch", swivel: false, d_rings: false, compatible_batteries: ["NNTN7033","NNTN7034"] },
    { desc: "Nylon carry case with 3 inch fixed belt loop", part: "PMLN5328", variants: ["7000"], material: "Nylon", belt_sz: "3 inch", swivel: false, d_rings: false, compatible_batteries: ["NNTN7035","NNTN7036","NNTN7037","NNTN7573"] },
    { desc: "Carry case for APX radio with clamshell battery", part: "PMLN6712", variants: ["7000","7000XE"], material: "Nylon", belt_sz: "Up to 5 inch", swivel: false, d_rings: true, compatible_batteries: ["PMNN4439"] },
    { desc: "2.5 inch hard plastic belt clip (not compatible with APX 7000 UHF radios)", part: "NTN8266", variants: ["7000","7000XE"], material: "Plastic", belt_sz: "2.5 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "3 inch hard plastic belt clip", part: "HLN6875", variants: ["7000","7000XE"], material: "Plastic", belt_sz: "3 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Universal chest pack with radio holder, pen holder and velcro secured pouch", part: "HLN6602", variants: ["7000","7000XE"], material: "Nylon", belt_sz: null, swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Break-away chest pack with radio holder, pen holder and velcro secured pouch", part: "RLN4570", variants: ["7000","7000XE"], material: "Nylon", belt_sz: null, swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "1.75 inch wide leather belt", part: "4200865599", variants: ["7000","7000XE"], material: "Leather", belt_sz: "Up to 41 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Adjustable nylon carrying strap", part: "NTN5243", variants: ["7000","7000XE"], material: "Nylon", belt_sz: "Up to 36 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Boston leather fireman radio strap", part: "RLN6486", variants: ["7000","7000XE"], material: "Leather", belt_sz: "Up to 62 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Boston leather fireman radio strap XL", part: "RLN6487", variants: ["7000","7000XE"], material: "Leather", belt_sz: "Up to 70 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Replacement carry case strap with snaps long (used with NNTN8111-8116)", part: "PMLN5800", variants: ["7000XE"], material: "Leather", belt_sz: "3 inch", swivel: false, d_rings: false, compatible_batteries: [] },
    { desc: "Replacement 2.5 inch leather swivel belt loop", part: "PMLN5407", variants: ["7000","7000XE"], material: "Hard leather", belt_sz: "2.5 inch", swivel: true, d_rings: false, compatible_batteries: [] },
    { desc: "Replacement 2.75 inch leather swivel belt loop", part: "PMLN5408", variants: ["7000","7000XE"], material: "Hard leather", belt_sz: "2.75 inch", swivel: true, d_rings: false, compatible_batteries: [] },
    { desc: "Replacement 3 inch leather swivel belt loop", part: "PMLN5409", variants: ["7000","7000XE"], material: "Hard leather", belt_sz: "3 inch", swivel: true, d_rings: false, compatible_batteries: [] }
  ],

  "Antennas": [
    { desc: "700/800 MHz GPS whip antenna", part: "NAF5085", variants: ["7000","7000XE"], band: "700/800", freq_mhz: "764-870", len_cm: 20.3, ant_type: "Whip", gps: true, hazloc: "UL" },
    { desc: "UHF GPS whip antenna", part: "PMAE4065", variants: ["7000","7000XE"], band: "UHF", freq_mhz: "380-520", len_cm: 14.2, ant_type: "Whip", gps: true, hazloc: "UL" },
    { desc: "VHF/700/800 MHz dual band GPS whip antenna", part: "NAR6594", variants: ["7000","7000XE"], band: "VHF/700/800", freq_mhz: "136-174, 764-870", len_cm: 20, ant_type: "Whip", gps: true, hazloc: "UL" },
    { desc: "VHF UHF dual band GPS whip antenna", part: "PMAT4001", variants: ["7000","7000XE"], band: "VHF/UHF", freq_mhz: "136-174, 380-520", len_cm: 21.8, ant_type: "Whip", gps: true, hazloc: "UL" },
    { desc: "UHF 700/800 MHz dual band GPS whip antenna", part: "PMAS4001", variants: ["7000","7000XE"], band: "UHF/700/800", freq_mhz: "380-520, 764-870", len_cm: 19.7, ant_type: "Whip", gps: true, hazloc: "UL" },
    { desc: "GPS antenna for PSM use when public safety microphone is connected", part: "NAG4000", variants: ["7000"], band: "700/800", freq_mhz: null, len_cm: 7.9, ant_type: "Stubby", gps: true, hazloc: null },
    { desc: "700/800 MHz public safety microphone only stubby antenna", part: "PMAF4002", variants: ["7000"], band: "700/800", freq_mhz: "764-870", len_cm: 9, ant_type: "Stubby", gps: false, hazloc: null }
  ],

  "Cables": [
    { desc: "Programming and test cable", part: "PMKN4013", variants: ["7000","7000XE"] },
    { desc: "Programming cable", part: "PMKN4012", variants: ["7000","7000XE"] }
  ]
};

if (typeof module !== "undefined") module.exports = APX7000_DATA;
