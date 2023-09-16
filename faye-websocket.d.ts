declare module "faye-websocket" {
  export = WebSocket;
  class WebSocket {
    /**
     * @param {import("node:http").IncomingMessage} request
     */
    static isWebSocket(request: import("node:http").IncomingMessage): any;
    /**
     * @param {any} options
     * @param {any} validKeys
     */
    static validateOptions(options: any, validKeys: any): void;
    /**
     * @param {import("node:http").IncomingMessage} request
     * @param {import("node:stream").Duplex} socket
     * @param {Buffer} body
     * @param {string[]} protocols
     * @param {{ maxLength?: number; }} options
     */
    constructor(request: import("node:http").IncomingMessage, socket: import("node:stream").Duplex, body: Buffer, protocols?: string[], options?: { maxLength?: number; });
    private _stream: import("node:stream").Duplex;
    private _driver: any;
  }
}