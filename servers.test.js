describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  
  it('should create a new table row with the new server', function () {
    let tables = Object.keys(allServers).length;
    expect(serverTbody.childNodes.length).toEqual(1);
  })

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverNameInput.value = '';
  });
});