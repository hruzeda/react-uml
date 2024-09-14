type FrameLayer = {
  "frame.section_number": string;
  "frame.interface_id": string;
  "frame.interface_id_tree": {
    "frame.interface_name": string;
  };
  "frame.encap_type": string;
  "frame.time": string;
  "frame.time_utc": string;
  "frame.time_epoch": string;
  "frame.offset_shift": string;
  "frame.time_delta": string;
  "frame.time_delta_displayed": string;
  "frame.time_relative": string;
  "frame.number": string;
  "frame.len": string;
  "frame.cap_len": string;
  "frame.marked": string;
  "frame.ignored": string;
  "frame.protocols": string;
  "frame.coloring_rule": {
    "frame.name": string;
    "frame.string": string;
  };
};

type SLLLayer = {
  "sll.pkttype": string;
  "sll.hatype": string;
  "sll.halen": string;
  "sll.src.eth": string;
  "sll.unused": string;
  "sll.etype": string;
};

type IPLayer = {
  "ip.version": string;
  "ip.hdr_len": string;
  "ip.dsfield": string;
  "ip.dsfield_tree": {
    "ip.dscp": string;
    "ip.ecn": string;
  };
  "ip.len": string;
  "ip.id": string;
  "ip.flags": string;
  "ip.flags_tree": {
    "ip.rb": string;
    "ip.df": string;
    "ip.mf": string;
  };
  "ip.frag_offset": string;
  "ip.ttl": string;
  "ip.proto": string;
  "ip.checksum": string;
  "ip.checksum_status": string;
  "ip.src": string;
  "ip.addr": string;
  "ip.src_host": string;
  "ip.dst": string;
  "ip.dst_host": string;
  "ip.stream": string;
};

type UDPLayer = {
  "udp.srcport": string;
  "udp.dstport": string;
  "udp.port": string;
  "udp.length": string;
  "udp.checksum": string;
  "udp.checksum_status": string;
  "udp.stream": string;
  "udp.stream_pnum": string;
  "udp.payload"?: string;
  Timestamps?: {
    time_relative: string;
    time_delta: string;
  };
};

type TCPAnalysis = {
  "tcp.analysis.bytes_in_flight": string;
  "tcp.analysis.push_bytes_sent": string;
};

type TCPLayer = {
  "tcp.srcport": string;
  "tcp.dstport": string;
  "tcp.port": string;
  "tcp.stream": string;
  "tcp.stream_pnum": string;
  "tcp.len": string;
  "tcp.seq": string;
  "tcp.seq_raw": string;
  "tcp.nxtseq": string;
  "tcp.ack": string;
  "tcp.ack_raw": string;
  "tcp.hdr_len": string;
  "tcp.flags": string;
  "tcp.flags_tree": {
    "tcp.flags.res": string;
    "tcp.flags.ae": string;
    "tcp.flags.cwr": string;
    "tcp.flags.ece": string;
    "tcp.flags.urg": string;
    "tcp.flags.ack": string;
    "tcp.flags.push": string;
    "tcp.flags.reset": string;
    "tcp.flags.syn": string;
    "tcp.flags.fin": string;
    "tcp.flags.str": string;
  };
  "tcp.window_size_value": string;
  "tcp.checksum": string;
  "tcp.checksum_status": string;
  "tcp.urgent_pointer": string;
  "tcp.options": string;
  "tcp.analysis"?: TCPAnalysis;
  "tcp.payload"?: string;
};

type PacketLayers = {
  frame?: FrameLayer;
  sll?: SLLLayer;
  ip?: IPLayer;
  udp?: UDPLayer;
  tcp?: TCPLayer;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // to handle other dynamic layers like PFCP, HTTP2, etc.
};

export type Packet = {
  _index: string;
  _type: string;
  _score: null;
  _source: {
    layers: PacketLayers;
  };
};
