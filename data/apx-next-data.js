const APX_NEXT_DATA = {
  variants: ['XN', 'XE', 'NEXT'],
  defaultVariant: 'XN',
  categories: {

    'RSM': {
      cols: ['desc','part','impres','multi_mic','noise_type','viqi','vol_ctrl','orange_btn','ch_ctrl','prog_btn','audio_jack','ip','hazloc','dims_mm'],
      rows: [
        {desc:'XVN500 high impact green, no channel knob, Xtreme temperature cable',part:'PMMN4138',variants:['XN'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:false,prog_btn:2,audio_jack:false,ip:'IP68',hazloc:'UL',dims_mm:'75x98x34'},
        {desc:'XVN500 high impact green, with channel knob, Xtreme temperature cable',part:'PMMN4162',variants:['XN'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:true,prog_btn:2,audio_jack:false,ip:'IP68',hazloc:'UL',dims_mm:'75x98x34'},
        {desc:'XVE500 high impact green, channel knob, Xtreme temperature cable',part:'PMMN4154_T',variants:['XE','NEXT'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:true,prog_btn:2,audio_jack:false,ip:'IP68',hazloc:'UL',dims_mm:'75x98x34'},
        {desc:'XVE500 black housing, channel knob, Xtreme temperature cable',part:'PMMN4154_TBLK',variants:['XE','NEXT'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:true,prog_btn:2,audio_jack:false,ip:'IP68',hazloc:'UL',dims_mm:'75x98x34'},
        {desc:'XVE500 high impact green, no channel knob, Xtreme temperature cable',part:'PMMN4152_T',variants:['XE','NEXT'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:false,prog_btn:2,audio_jack:false,ip:'IP68',hazloc:'UL',dims_mm:'75x98x34'},
        {desc:'XVE500 black housing, no channel knob, Xtreme temperature cable',part:'PMMN4152_TBLK',variants:['XE','NEXT'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:false,prog_btn:2,audio_jack:false,ip:'IP68',hazloc:'UL',dims_mm:'75x98x34'},
        {desc:'XVP850 RSM with channel knob, TAA compliant',part:'PMMN4135_TAA',variants:['XE','NEXT'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:true,prog_btn:3,audio_jack:'3.5mm',ip:'IP68',hazloc:'UL',dims_mm:'58x93x31'},
        {desc:'XVP830 RSM without channel knob, TAA compliant',part:'PMMN4136_TAA',variants:['XE','NEXT'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:false,prog_btn:3,audio_jack:'3.5mm',ip:'IP68',hazloc:'UL',dims_mm:'58x93x31'},
        {desc:'XVP850 RSM with channel knob',part:'PMMN4135',variants:['XE','NEXT'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:true,prog_btn:3,audio_jack:'3.5mm',ip:'IP68',hazloc:'UL',dims_mm:'58x93x31'},
        {desc:'XVP830 RSM without channel knob',part:'PMMN4136',variants:['XE','NEXT'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:false,prog_btn:3,audio_jack:'3.5mm',ip:'IP68',hazloc:'UL',dims_mm:'58x93x31'},
        {desc:'WM800 wireless RSM (with battery and USB charging cable)',part:'PMMN4158',variants:['XN','XE','NEXT'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:false,prog_btn:3,audio_jack:'3.5mm',ip:'IP68',hazloc:'UL',dims_mm:'67.5x98x32'},
        {desc:'SVX Video Remote Speaker Microphone',part:'PMMN8200',variants:['XN','NEXT'],impres:true,multi_mic:true,noise_type:'Adaptive',viqi:true,vol_ctrl:true,orange_btn:true,ch_ctrl:false,prog_btn:3,audio_jack:false,ip:'IP68',hazloc:'UL',dims_mm:'61.1x109.3x36.4'}
      ]
    },

    'Surveillance': {
      cols: ['desc','part','impres','ear_type','mic_type','ptt','prog_btn','hazloc'],
      rows: [
        {desc:'IMPRES 2-wire surveillance kit, programmable button, black',part:'PMLN6127',variants:['XE','NEXT'],impres:true,ear_type:'Ear hanger',mic_type:'Inline',ptt:true,prog_btn:true,hazloc:'UL'},
        {desc:'IMPRES 2-wire surveillance kit with translucent tube, programmable button, black',part:'PMLN6129',variants:['XE','NEXT'],impres:true,ear_type:'Clear rubber eartip',mic_type:'Inline',ptt:true,prog_btn:true,hazloc:'UL'},
        {desc:'IMPRES 2-wire surveillance kit with translucent tube, programmable button, beige',part:'PMLN6130',variants:['XE','NEXT'],impres:true,ear_type:'Clear rubber eartip',mic_type:'Inline',ptt:true,prog_btn:true,hazloc:'UL'},
        {desc:'2-wire surveillance kit with translucent tube, black, 3.5mm threaded (requires BDN6783)',part:'RLN5312',variants:['XE','NEXT'],impres:false,ear_type:'Clear rubber eartip',mic_type:'Inline',ptt:true,prog_btn:false,hazloc:null}
      ]
    },

    'Headsets': {
      cols: ['desc','part','headset_type','ear_style','nrr_db','mic_type','ptt','ip','hazloc'],
      rows: []
    },

    'Batteries': {
      cols: ['desc','part','impres','chem','capacity_mah','dims_mm','weight_g','hazloc','ip','op_temp'],
      rows: [
        {desc:'IMPRES 2 Li-Ion 3400 mAh battery, IP68 rugged',part:'PMNN4812',variants:['XN'],impres:true,chem:'Li-Ion',capacity_mah:3400,dims_mm:'117x64x42',weight_g:280,hazloc:'UL',ip:'IP68',op_temp:'-20°C to +60°C'},
        {desc:'IMPRES 2 Li-Ion 4400 mAh battery, IP68 rugged',part:'NNTN9217',variants:['XE'],impres:true,chem:'Li-Ion',capacity_mah:4400,dims_mm:'82x64x42',weight_g:195,hazloc:'UL',ip:'IP68',op_temp:'-20°C to +60°C'},
        {desc:'IMPRES 2 Li-Ion 5550 mAh battery, IP68 rugged',part:'PMNN4896',variants:['XE'],impres:true,chem:'Li-Ion',capacity_mah:5550,dims_mm:'96x64x42',weight_g:258,hazloc:'UL',ip:'IP68',op_temp:'-20°C to +60°C'},
        {desc:'IMPRES 2 Li-Ion 4400 mAh battery, IP68 rugged',part:'NNTN9216',variants:['NEXT'],impres:true,chem:'Li-Ion',capacity_mah:4400,dims_mm:'82x64x42',weight_g:195,hazloc:null,ip:'IP68',op_temp:'-20°C to +60°C'},
        {desc:'IMPRES 2 Li-Ion 5550 mAh battery, IP68 rugged',part:'PMNN4895',variants:['NEXT'],impres:true,chem:'Li-Ion',capacity_mah:5550,dims_mm:'96x64x42',weight_g:258,hazloc:null,ip:'IP68',op_temp:'-20°C to +60°C'}
      ]
    },

    'Chargers': {
      cols: ['desc','part','impres','chem','pwr_src','dims_mm','pockets'],
      rows: [
        {desc:'IMPRES 2 Single-Unit Fast Charger, US/NA 115V',part:'PMPN4604',variants:['XN','XE','NEXT'],impres:true,chem:'Li-Ion',pwr_src:'115VAC',dims_mm:'75x100x125',pockets:1},
        {desc:'IMPRES 2 Multi-Unit Fast Charger, 6 displays, 6 USB ports, US/NA 100-240V',part:'PMPN4591',variants:['XN','XE','NEXT'],impres:true,chem:'Li-Ion',pwr_src:'100-240VAC',dims_mm:'197x445x262',pockets:6},
        {desc:'IMPRES 2 Single-Unit Fast Charger, US/NA 115V',part:'NNTN9199',variants:['XN','XE','NEXT'],impres:true,chem:'Li-Ion',pwr_src:'115VAC',dims_mm:'75x100x125',pockets:1},
        {desc:'IMPRES 2 Single-Unit Fast Charger, ANZ 100-240V',part:'NNTN9259',variants:['XN','XE','NEXT'],impres:true,chem:'Li-Ion',pwr_src:'100-240VAC',dims_mm:'75x100x125',pockets:1},
        {desc:'IMPRES 2 Single-Unit Fast Charger, BRZ 100-240V',part:'NNTN9204',variants:['XN','XE','NEXT'],impres:true,chem:'Li-Ion',pwr_src:'100-240VAC',dims_mm:'75x100x125',pockets:1},
        {desc:'IMPRES 2 Multi-Unit Fast Charger, US/NA 100-240V',part:'NNTN9115',variants:['XN','XE','NEXT'],impres:true,chem:'Li-Ion',pwr_src:'100-240VAC',dims_mm:'197x445x262',pockets:6},
        {desc:'IMPRES 2 Multi-Unit Fast Charger, ANZ 100-240V',part:'NNTN9113',variants:['XN','XE','NEXT'],impres:true,chem:'Li-Ion',pwr_src:'100-240VAC',dims_mm:'197x445x262',pockets:6},
        {desc:'IMPRES 2 Multi-Unit Fast Charger, BRZ 100-240V',part:'NNTN9114',variants:['XN','XE','NEXT'],impres:true,chem:'Li-Ion',pwr_src:'100-240VAC',dims_mm:'197x445x262',pockets:6},
        {desc:'APX NEXT Vehicle Charger',part:'PMPN4639',variants:['XN','XE','NEXT'],impres:true,chem:'Li-Ion',pwr_src:'12VDC hardwire',dims_mm:'82x97x200',pockets:1},
        {desc:'APX NEXT Travel Charger with CLA cable and mounting bracket',part:'PMPN4688',variants:['XN','XE','NEXT'],impres:true,chem:'Li-Ion',pwr_src:'12-24V',dims_mm:null,pockets:1}
      ]
    },

    'Carry': {
      cols: ['desc','part','material','belt_sz','swivel','d_rings'],
      rows: [
        {desc:'APX NEXT XN Boston Leather Carry Case',part:'PMLN8328',variants:['XN'],material:'Leather',belt_sz:null,swivel:null,d_rings:true},
        {desc:'APX NEXT XN Classic Holster (belt clip sold separately)',part:'PMLN8601',variants:['XN'],material:'Thermoplastic',belt_sz:'2.5" or 3"',swivel:false,d_rings:true},
        {desc:'APX NEXT XE Classic Holster (belt clip sold separately)',part:'PMLN8936',variants:['XE'],material:'Plastic',belt_sz:'2.5" or 3"',swivel:false,d_rings:true},
        {desc:'APX NEXT XE Boston Leather Carry Case with Standard Battery',part:'PMLN8935',variants:['XE'],material:'Leather',belt_sz:null,swivel:null,d_rings:true},
        {desc:'APX NEXT Classic Holster (belt clip sold separately)',part:'PMLN7947',variants:['NEXT'],material:'Plastic',belt_sz:'2.5" or 3"',swivel:false,d_rings:false},
        {desc:'APX NEXT Hybrid Leather Carry Case with Standard Battery',part:'PMLN7948',variants:['NEXT'],material:'Plastic/Leather',belt_sz:'2.5" or 3"',swivel:false,d_rings:false},
        {desc:'APX NEXT Hybrid Leather Carry Case with Hi Capacity Battery',part:'PMLN8753',variants:['NEXT'],material:'Plastic/Leather',belt_sz:'2.5" or 3"',swivel:false,d_rings:false}
      ]
    },

    'Antennas': {
      cols: ['desc','part','band','freq_mhz','len_cm','ant_type','gps','hazloc'],
      rows: [
        {desc:'All-Band Whip Antenna',part:'AN000417A01',variants:['XN'],band:'All-band',freq_mhz:'136-174 / 380-520 / 760-870',len_cm:20,ant_type:'Whip',gps:false,hazloc:'UL'},
        {desc:'700/800 MHz Stubby Antenna',part:'AN000296A01',variants:['XE','NEXT'],band:'700/800',freq_mhz:'760-870',len_cm:6.5,ant_type:'Stubby',gps:false,hazloc:'UL'},
        {desc:'UHF 380-470 MHz Stubby Antenna',part:'AN000369B01',variants:['XE','NEXT'],band:'UHF',freq_mhz:'380-470',len_cm:9.0,ant_type:'Stubby',gps:false,hazloc:'UL'},
        {desc:'UHF 450-527 MHz Stubby Antenna',part:'AN000369B02',variants:['XE','NEXT'],band:'UHF',freq_mhz:'450-527',len_cm:9.0,ant_type:'Stubby',gps:false,hazloc:'UL'},
        {desc:'700/800 MHz Short Whip Antenna',part:'AN000392A01',variants:['XE','NEXT'],band:'700/800',freq_mhz:'762-870',len_cm:16.0,ant_type:'Short Whip',gps:false,hazloc:'UL'},
        {desc:'UHF 350-520 MHz Short Whip Antenna',part:'AN000393A01',variants:['XE','NEXT'],band:'UHF',freq_mhz:'350-520',len_cm:14.0,ant_type:'Short Whip',gps:false,hazloc:'UL'},
        {desc:'All-Band Antenna',part:'AN000297A01',variants:['XE','NEXT'],band:'All-band',freq_mhz:'136-174 / 380-520 / 760-870',len_cm:20.0,ant_type:'Whip',gps:false,hazloc:'UL'}
      ]
    },

    'Cables': {
      cols: ['desc','part'],
      rows: [
        {desc:'10-Pin RFDC adapter cable',part:'PMKN4262',variants:['XN']},
        {desc:'Cloning cable',part:'PMKN4197',variants:['NEXT']}
      ]
    }

  }
};