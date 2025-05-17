import { createClient } from "next-sanity";
import { projectId,dataset,apiVersion } from "./env";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});