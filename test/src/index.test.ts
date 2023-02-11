// CODE

import { expect, it } from "vitest";
import { z } from "zod";
//       ^ 🕵️‍♂️

export const toString = (num: unknown) => {
  const parsed = z.number().parse(num);
  return String(parsed);
};

// TESTS

it("Should throw a runtime error when called with not a number", () => {
  expect(() => toString("123")).toThrowError("Expected number, received string");
});

it("Should return a string when called with a number", () => {
  expect(toString(1)).toBeTypeOf("string");
});

// TEST

const PersonResult = z.object({
  name: z.string(),
});
//                   ^ 🕵️‍♂️

export const fetchStarWarsPersonName = async (id: string) => {
  const data = await fetch(
    "https://www.totaltypescript.com/swapi/people/" + id + ".json",
  ).then(res => res.json());

  const parsedData = PersonResult.parse(data);

  return parsedData.name;
};

// TESTS

it("Should return the name", async () => {
  expect(await fetchStarWarsPersonName("1")).toEqual("Luke Skywalker");
  expect(await fetchStarWarsPersonName("2")).toEqual("C-3PO");
});

// 3

/* const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({ results: z.array(StarWarsPerson) });
//                            ^ 🕵️‍♂️

export const fetchStarWarsPeople = async () => {
  const data = await fetch("https://www.totaltypescript.com/swapi/people.json").then(
    res => res.json(),
  );

  const parsedData = StarWarsPeopleResults.parse(data);

  return parsedData.results;
};

// TESTS

it("Should return the name", async () => {
  expect((await fetchStarWarsPeople())[0]).toEqual({
    name: "Luke Skywalker",
  });
}); */

// 4

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
});

const logStarWarsPeopleResults = (data: z.infer<typeof StarWarsPeopleResults>) => {
  //                                    ^ 🕵️‍♂️
  data.results.map(person => {
    console.log(person.name);
  });
};