import IVotes from "../interface/votes";

export const getPaslon = async (): Promise<IVotes[]> => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/admin/paslons");
    if (!response.ok) {
      throw new Error(`Failed to fetch palons: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching paslons: ${error}`);
  }
};
