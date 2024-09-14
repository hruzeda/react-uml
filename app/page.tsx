import pcap from "./pcap_test.json";
import { Packet } from "./types";

export default function Home() {
  return (
    <div>
      <h1>PCAP</h1>

      {(pcap as unknown as Packet[]).map((packet, index) => (
        <li key={index}>
          <strong>
            Packet{" "}
            {packet._source.layers.frame
              ? packet._source.layers.frame["frame.number"]
              : ""}
          </strong>
          <ul>
            {packet._source.layers.frame && (
              <li>
                <strong>Frame</strong>

                <ul>
                  <li>Number: {packet._source.layers.frame["frame.number"]}</li>
                  <li>Time: {packet._source.layers.frame["frame.time"]}</li>
                  <li>
                    Epoch Time:{" "}
                    {packet._source.layers.frame["frame.time_epoch"]}
                  </li>
                  <li>Length: {packet._source.layers.frame["frame.len"]}</li>
                  <li>
                    Protocols in frame:{" "}
                    {packet._source.layers.frame["frame.protocols"]}
                  </li>
                </ul>
              </li>
            )}

            {packet._source.layers.sll && (
              <li>
                <strong>SLL</strong>

                <ul>
                  <li>
                    Packet Type: {packet._source.layers.sll["sll.pkttype"]}
                  </li>
                  <li>
                    Address Type: {packet._source.layers.sll["sll.hatype"]}
                  </li>
                  <li>
                    Address Length: {packet._source.layers.sll["sll.halen"]}
                  </li>
                  <li>
                    Source Address: {packet._source.layers.sll["sll.src.eth"]}
                  </li>
                  <li>Type: {packet._source.layers.sll["sll.etype"]}</li>
                </ul>
              </li>
            )}

            {packet._source.layers.tcp && (
              <li>
                <strong>TCP</strong>

                <ul>
                  <li>
                    Source Port: {packet._source.layers.tcp["tcp.srcport"]}
                  </li>
                  <li>
                    Destination Port: {packet._source.layers.tcp["tcp.dstport"]}
                  </li>
                  <li>Stream: {packet._source.layers.tcp["tcp.stream"]}</li>
                  <li>Length: {packet._source.layers.tcp["tcp.len"]}</li>
                  <li>Sequence: {packet._source.layers.tcp["tcp.seq"]}</li>
                  <li>
                    Next Sequence: {packet._source.layers.tcp["tcp.nxtseq"]}
                  </li>
                  <li>
                    Acknowledgment: {packet._source.layers.tcp["tcp.ack"]}
                  </li>
                  <li>
                    Header Length: {packet._source.layers.tcp["tcp.hdr_len"]}
                  </li>
                  <li>Flags: {packet._source.layers.tcp["tcp.flags"]}</li>
                  <li>
                    Window Size:{" "}
                    {packet._source.layers.tcp["tcp.window_size_value"]}
                  </li>
                  <li>Checksum: {packet._source.layers.tcp["tcp.checksum"]}</li>
                  <li>
                    Urgent Pointer:{" "}
                    {packet._source.layers.tcp["tcp.urgent_pointer"]}
                  </li>
                  <li>Options: {packet._source.layers.tcp["tcp.options"]}</li>
                  {packet._source.layers.tcp["tcp.analysis"] && (
                    <li>
                      <strong>Analysis</strong>
                      <ul>
                        <li>
                          Bytes in Flight:{" "}
                          {
                            packet._source.layers.tcp["tcp.analysis"][
                              "tcp.analysis.bytes_in_flight"
                            ]
                          }
                        </li>
                        <li>
                          Push Bytes Sent:{" "}
                          {
                            packet._source.layers.tcp["tcp.analysis"][
                              "tcp.analysis.push_bytes_sent"
                            ]
                          }
                        </li>
                      </ul>
                    </li>
                  )}
                </ul>
              </li>
            )}

            {packet._source.layers.ip && (
              <li>
                <strong>IP</strong>

                <ul>
                  <li>Source IP: {packet._source.layers.ip["ip.src"]}</li>
                  <li>Destination IP: {packet._source.layers.ip["ip.dst"]}</li>
                  <li>Protocol: {packet._source.layers.ip["ip.proto"]}</li>
                </ul>
              </li>
            )}

            {packet._source.layers.udp && (
              <li>
                <strong>UDP</strong>

                <ul>
                  <li>
                    Source Port: {packet._source.layers.udp["udp.srcport"]}
                  </li>
                  <li>
                    Destination Port: {packet._source.layers.udp["udp.dstport"]}
                  </li>
                  <li>Length: {packet._source.layers.udp["udp.length"]}</li>
                  <li>Checksum: {packet._source.layers.udp["udp.checksum"]}</li>
                </ul>
              </li>
            )}
          </ul>
        </li>
      ))}
    </div>
  );
}
