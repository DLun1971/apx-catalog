// data/apx-n50-data.js
// APX N50 / N30 portable radio accessories
// PDF source: APX Radio Accessories catalog (2026)
// Variants: N50, N30
// Note: XVP750/730 compatible with N50 only when Audio Bundle is selected per PDF footnote

window.APX_N50_DATA = {
  variants: ['N50', 'N30'],

  categories: {

    RSM: [
      {
        desc: 'RM780 RSM',
        part: 'PMMN4128',
        variants: ['N50', 'N30'],
        impres: true,
        multi_mic: false,
        noise_type: 'Windporting mic',
        viqi: false,
        vol_ctrl: true,
        orange_btn: true,
        ch_ctrl: false,
        prog_btn: '2',
        audio_jack: false,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '77 x 58 x 25'
      },
      {
        desc: 'RM780 RSM (alternate SKU)',
        part: 'PMMN4177',
        variants: ['N50', 'N30'],
        impres: true,
        multi_mic: false,
        noise_type: 'Windporting mic',
        viqi: false,
        vol_ctrl: true,
        orange_btn: true,
        ch_ctrl: false,
        prog_btn: '2',
        audio_jack: false,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '77 x 58 x 25'
      },
      {
        desc: 'XVP750 RSM with channel knob, TAA compliant (requires Audio Bundle on N50)',
        part: 'PMMN4141_TAA',
        variants: ['N50'],
        impres: true,
        multi_mic: true,
        noise_type: 'Multi-mic noise suppression',
        viqi: true,
        vol_ctrl: true,
        orange_btn: true,
        ch_ctrl: true,
        prog_btn: '3',
        audio_jack: true,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '58 x 93 x 31'
      },
      {
        desc: 'XVP750 RSM with channel knob (requires Audio Bundle on N50)',
        part: 'PMMN4141',
        variants: ['N50'],
        impres: true,
        multi_mic: true,
        noise_type: 'Multi-mic noise suppression',
        viqi: true,
        vol_ctrl: true,
        orange_btn: true,
        ch_ctrl: true,
        prog_btn: '3',
        audio_jack: true,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '58 x 93 x 31'
      },
      {
        desc: 'XVP730 RSM without channel knob, TAA compliant (requires Audio Bundle on N50)',
        part: 'PMMN4142_TAA',
        variants: ['N50'],
        impres: true,
        multi_mic: true,
        noise_type: 'Multi-mic noise suppression',
        viqi: true,
        vol_ctrl: true,
        orange_btn: true,
        ch_ctrl: false,
        prog_btn: '3',
        audio_jack: true,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '58 x 93 x 31'
      },
      {
        desc: 'XVP730 RSM without channel knob (requires Audio Bundle on N50)',
        part: 'PMMN4142',
        variants: ['N50'],
        impres: true,
        multi_mic: true,
        noise_type: 'Multi-mic noise suppression',
        viqi: true,
        vol_ctrl: true,
        orange_btn: true,
        ch_ctrl: false,
        prog_btn: '3',
        audio_jack: true,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '58 x 93 x 31'
      },
      {
        desc: 'WM800 wireless RSM (with battery and USB charging cable)',
        part: 'PMMN4158',
        variants: ['N50', 'N30'],
        impres: true,
        multi_mic: true,
        noise_type: 'Multi-mic noise suppression',
        viqi: false,
        vol_ctrl: true,
        orange_btn: true,
        ch_ctrl: false,
        prog_btn: '3',
        audio_jack: true,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '67.5 x 98 x 32'
      }
    ],

    Surveillance: [
      {
        desc: 'IMPRES 1-Wire Surveillance Kit with Translucent Tube, Loud Audio, Black',
        part: 'PMLN8341',
        variants: ['N50', 'N30'],
        impres: true,
        ear_type: 'Clear rubber eartip',
        mic_type: 'Inline',
        ptt: false,
        prog_btn: false,
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Loud Audio, Black',
        part: 'PMLN8342',
        variants: ['N50', 'N30'],
        impres: true,
        ear_type: 'Clear rubber eartip',
        mic_type: 'Inline',
        ptt: true,
        prog_btn: false,
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Loud Audio, Black',
        part: 'PMLN8343',
        variants: ['N50', 'N30'],
        impres: true,
        ear_type: 'Clear rubber eartip',
        mic_type: 'Inline',
        ptt: true,
        prog_btn: false,
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES 2-Wire Swivel Earhook with Removable Eartip, Loud Audio, Black',
        part: 'PMLN8295',
        variants: ['N50', 'N30'],
        impres: true,
        ear_type: 'Removable black rubber eartip',
        mic_type: 'Inline',
        ptt: true,
        prog_btn: false,
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES 1-Wire Single Earbud with Removable Earhook, Loud Audio, Black',
        part: 'PMLN8337',
        variants: ['N50', 'N30'],
        impres: true,
        ear_type: 'Single earbud',
        mic_type: null,
        ptt: false,
        prog_btn: false,
        hazloc: null
      }
    ],

    Headsets: [
      {
        desc: 'Heavy duty behind-the-head headset with noise-canceling boom mic',
        part: 'PMLN8085',
        variants: ['N50', 'N30'],
        impres: true,
        headset_type: 'Behind-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      {
        desc: 'Heavy duty over-the-head headset with noise-canceling boom mic',
        part: 'PMLN8086',
        variants: ['N50', 'N30'],
        impres: true,
        headset_type: 'Over-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      {
        desc: 'CH-3 Series Over-the-Head Headset with Nexus Connector (requires PTT adapter PMLN8297)',
        part: 'PMLN8265',
        variants: ['N50', 'N30'],
        impres: false,
        headset_type: 'Over-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 26,
        mic_type: 'Boom',
        hazloc: null
      },
      {
        desc: 'CH-3 Series Neckband Headset with Nexus Connector (requires PTT adapter PMLN8297)',
        part: 'PMLN8266',
        variants: ['N50', 'N30'],
        impres: false,
        headset_type: 'Neckband',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: null
      },
      {
        desc: 'CH-3 Series Hard Hat Attached Headset with Nexus Connector, hat not included (requires PTT adapter PMLN8297)',
        part: 'PMLN8267',
        variants: ['N50', 'N30'],
        impres: false,
        headset_type: 'Hard hat attached',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: null
      },
      {
        desc: 'PTT Nexus Adapter for CH-3 Series headsets',
        part: 'PMLN8297',
        variants: ['N50', 'N30'],
        impres: false,
        headset_type: 'Adapter',
        ear_style: null,
        nrr_db: null,
        mic_type: null,
        hazloc: null
      }
    ],

    Batteries: [
      {
        desc: 'IMPRES 2 Li-Ion 2850 mAh Battery, IP68 Rugged',
        part: 'PMNN4813',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2850,
        dims_mm: '117 x 49 x 15',
        weight_g: 115,
        hazloc: null,
        ip: 'IP68',
        op_temp: '-20°C to +60°C'
      },
      {
        desc: 'IMPRES 2 Li-Ion 3200 mAh Battery, IP68 Rugged',
        part: 'PMNN4815',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 3200,
        dims_mm: '116 x 48 x 23',
        weight_g: 165,
        hazloc: 'UL',
        ip: 'IP68',
        op_temp: '-20°C to +60°C'
      }
    ],

    Chargers: [
      {
        desc: 'IMPRES 2 Single-Unit Charger, US/NA 115V',
        part: 'PMPN4820',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '115VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES 2 Single-Unit Charger, EU 240V',
        part: 'PMPN4821',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES 2 Single-Unit Charger, UK/HK 240V',
        part: 'PMPN4822',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES 2 Single-Unit Charger, ANZ 240V',
        part: 'PMPN4823A',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES 2 Multi-Unit Charger, US/NA 100-240V',
        part: 'PMPN4594',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240VAC',
        dims_mm: '117 x 444 x 170',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Charger, EU 100-240V',
        part: 'PMPN4595',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240VAC',
        dims_mm: '117 x 444 x 170',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Charger, UK/HK 100-240V',
        part: 'PMPN4596',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240VAC',
        dims_mm: '117 x 444 x 170',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Charger, ANZ 100-240V',
        part: 'PMPN4597',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240VAC',
        dims_mm: '117 x 444 x 170',
        pockets: 6
      },
      {
        desc: 'APX N30/N50 Vehicle Charger',
        part: 'PMPN5042A',
        variants: ['N50', 'N30'],
        impres: true,
        chem: 'Li-Ion',
        pwr_src: '12VDC Hardwire',
        dims_mm: '96 x 96 x 143',
        pockets: 1
      },
      {
        desc: 'Replacement power supply for IMPRES 2 single-unit charger, US/NA 115V',
        part: '25009297002',
        variants: ['N50', 'N30'],
        impres: false,
        chem: null,
        pwr_src: '115VAC',
        dims_mm: null,
        pockets: null
      },
      {
        desc: 'Replacement power supply for IMPRES 2 Multi-Unit Charger, 100-240V (without power cord)',
        part: 'PS000242A01',
        variants: ['N50', 'N30'],
        impres: false,
        chem: null,
        pwr_src: '100-240VAC',
        dims_mm: null,
        pockets: null
      },
      {
        desc: 'Spare battery adapter for APX N30/N50 Vehicle Charger',
        part: 'PMPN5041A',
        variants: ['N50', 'N30'],
        impres: false,
        chem: null,
        pwr_src: null,
        dims_mm: null,
        pockets: null
      }
    ],

    Carry: [
      {
        desc: 'APX N30/N50 Hard Leather Carry Case with 2.75" Swivel Belt Loop, for PMNN4813 battery',
        part: 'PMLN8609',
        variants: ['N50', 'N30'],
        material: 'Leather',
        belt_sz: '2.75"',
        swivel: true,
        d_rings: false
      },
      {
        desc: 'APX N30/N50 Hard Leather Carry Case with 2.75" Swivel Belt Loop, for PMNN4815 battery',
        part: 'PMLN8668',
        variants: ['N50', 'N30'],
        material: 'Leather',
        belt_sz: '2.75"',
        swivel: true,
        d_rings: false
      },
      {
        desc: 'APX N30/N50 2.0" Belt Clip',
        part: 'PMLN8369',
        variants: ['N50', 'N30'],
        material: 'Plastic',
        belt_sz: '2.0"',
        swivel: false,
        d_rings: false
      },
      {
        desc: 'APX N30/N50 2.5" Belt Clip',
        part: 'PMLN8370',
        variants: ['N50', 'N30'],
        material: 'Plastic',
        belt_sz: '2.5"',
        swivel: false,
        d_rings: false
      },
      {
        desc: '2.5" Leather Swivel Belt Loop',
        part: 'PMLN5407',
        variants: ['N50', 'N30'],
        material: 'Leather',
        belt_sz: '2.5"',
        swivel: true,
        d_rings: false
      },
      {
        desc: '2.75" Leather Swivel Belt Loop',
        part: 'PMLN5408',
        variants: ['N50', 'N30'],
        material: 'Leather',
        belt_sz: '2.75"',
        swivel: true,
        d_rings: false
      },
      {
        desc: '3" Leather Swivel Belt Loop',
        part: 'PMLN5409',
        variants: ['N50', 'N30'],
        material: 'Leather',
        belt_sz: '3"',
        swivel: true,
        d_rings: false
      }
    ],

    Antennas: [
      {
        desc: '700/800 MHz Short Whip Antenna',
        part: 'AN000411A01',
        variants: ['N50', 'N30'],
        band: '700/800',
        freq_mhz: '762-870',
        len_cm: 15.0,
        ant_type: 'Short Whip, Single Band',
        gps: false,
        hazloc: 'UL'
      },
      {
        desc: '700/800 MHz Stubby Antenna',
        part: 'AN000418A01',
        variants: ['N50', 'N30'],
        band: '700/800',
        freq_mhz: '762-870',
        len_cm: 10.0,
        ant_type: 'Stubby, Single Band',
        gps: false,
        hazloc: 'UL'
      },
      {
        desc: '380/530 MHz UHF Stubby Antenna',
        part: 'AN000451A01',
        variants: ['N50', 'N30'],
        band: 'UHF',
        freq_mhz: '380-520',
        len_cm: 9.0,
        ant_type: 'Stubby, Single Band',
        gps: false,
        hazloc: 'UL'
      },
      {
        desc: '136-174 MHz VHF Whip Antenna',
        part: 'AN000421A01',
        variants: ['N50', 'N30'],
        band: 'VHF',
        freq_mhz: '136-174',
        len_cm: 18.0,
        ant_type: 'Whip, Single Band',
        gps: false,
        hazloc: 'UL'
      }
    ],

    Cables: [
      {
        desc: 'Data cable',
        part: 'PMKN4265',
        variants: ['N50', 'N30']
      },
      {
        desc: 'Test and align cable PSA',
        part: 'PMKN4231',
        variants: ['N50', 'N30']
      },
      {
        desc: 'GCAI-mini cloning cable',
        part: 'PMKN4292',
        variants: ['N50', 'N30']
      },
      {
        desc: 'GCAI-mini keyloader cable',
        part: 'PMKN4291',
        variants: ['N50', 'N30']
      },
      {
        desc: 'GCAI mini to GCAI cable adapter',
        part: 'PMLN8334',
        variants: ['N50', 'N30']
      }
    ]

  }
};