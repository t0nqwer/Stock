export const testinvoke = async (channel) => {
  const data = await bridge.invoke(channel, data);
  return data;
};
export const checkOnlineStatus = async () => {
  try {
    const online = await fetch("www.google.com");
    return online.status >= 200 && online.status < 300; // either true or false
  } catch (err) {
    return false; // definitely offline
  }
};
