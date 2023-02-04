export const testinvoke = async (channel) => {
  const data = await bridge.invoke(channel, data);
  return data;
};
