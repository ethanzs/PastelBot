import discord
from discord.ext import commands
import requests

# Configs
COMMAND_PREFIX = "!"

# Defining endpoints
BOT_STATUS_ENDPOINT = "http://localhost:8080/api/discord/botstatus"
MESSAGE_ENDPOINT = "http://localhost:8080/api/discord/message"

# Initialize discord.py bot with prefix of choice
bot = commands.Bot(command_prefix=COMMAND_PREFIX)


@bot.event
async def on_ready():
    print(f"Pastel Bot initialized.")
    bot_running = {"bot_status": "running"}  # Data to be posted
    requests.post(url=BOT_STATUS_ENDPOINT, data=bot_running)  # Post


@bot.event
async def on_message(message):
    print(message.content)
    message_post = {
        "author": message.author,
        "content": message.content,
    }  # Data to be posted
    requests.post(url=MESSAGE_ENDPOINT, data=message_post)  # Post


# Secret token given by Discord for your bot
bot.run("NzgxMjE0OTcwMDU3NTg4NzU2.X76ZIw.4khImFR9IqRWaL8GUhFnaJQF7u4")
