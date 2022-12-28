import express, { json, request, response } from "express";
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinute } from "./utils/convert-hour-minute";

const app = express();

app.use(express.json())

const prisma = new PrismaClient({
  log: ["query"],
});

app.get("/games", async (request, response) => {
  console.log("ads")
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return response.status(201).json(games);
});

app.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId: gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return response.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(",")
      };
    })
  );
});

app.get("/ads/:id/discord", async (request, response) => {
  const adId = request.params.id

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    }, 
    where: {
      id: adId
    }
  })

  return response.json({
    discord: ad.discord
  })
});

app.post("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id
  const body = request.body


  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinute(body.hourStart),
      hourEnd: convertHourStringToMinute(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel
    }
  })

  return response.status(202).json(ad)
});

// passando a rota para o aplicativo rodar
app.listen(3000);
