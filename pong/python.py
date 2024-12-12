import pygame
import sys
import random

def ball_animation():
    global ball_speed_x, ball_speed_y, player_score, opponent_score
    ball.x += ball_speed_x
    ball.y += ball_speed_y

    if ball.top <= 0 or ball.bottom >= screen_height:
        ball_speed_y *= -1
    if ball.left <= 0:
        opponent_score += 1
        ball_restart()
    if ball.right >= screen_width:
        player_score += 1
        ball_restart()

    if ball.colliderect(player) or ball.colliderect(opponent):
        ball_speed_x *= -1

def player_animation():
    player.y += player_speed
    if player.top <= 0:
        player.top = 0
    if player.bottom >= screen_height:
        player.bottom = screen_height

def opponent_ai():
    if opponent.top < ball.y:
        opponent.top += opponent_speed
    if opponent.bottom > ball.y:
        opponent.bottom -= opponent_speed
    if opponent.top <= 0:
        opponent.top = 0
    if opponent.bottom >= screen_height:
        opponent.bottom = screen_height

def ball_restart():
    global ball_speed_x, ball_speed_y
    ball.center = (screen_width / 2, screen_height / 2)
    ball_speed_y *= random.choice((1, -1))
    ball_speed_x *= random.choice((1, -1))

def draw_score():
    score_text = f"{player_score} - {opponent_score}"
    score_surface = score_font.render(score_text, True, light_grey)
    score_rect = score_surface.get_rect(center=(screen_width / 2, 50))
    screen.blit(score_surface, score_rect)

def draw_winner(winner_text):
    winner_surface = score_font.render(winner_text, True, light_grey)
    winner_rect = winner_surface.get_rect(center=(screen_width / 2, screen_height / 2))
    screen.blit(winner_surface, winner_rect)

pygame.init()
clock = pygame.time.Clock()

screen_width = 1279
screen_height = 960
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Pong')

ball = pygame.Rect(screen_width / 2 - 15, screen_height / 2 - 15, 30, 30)
player = pygame.Rect(screen_width - 20, screen_height / 2 - 70, 10, 140)
opponent = pygame.Rect(10, screen_height / 2 - 70, 10, 140)

bg_color = pygame.Color('grey12')
light_grey = (200, 200, 200)

ball_speed_x = 7 * random.choice((1, -1))
ball_speed_y = 7 * random.choice((1, -1))
player_speed = 0
opponent_speed = 15

player_score = 0
opponent_score = 0
score_font = pygame.font.Font(None, 125)

game_over = False
game_over_time = 0
delay_duration =  20

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_DOWN:
                player_speed += 7
            if event.key == pygame.K_UP:
                player_speed -= 7
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_DOWN:
                player_speed -= 7
            if event.key == pygame.K_UP:
                player_speed += 7

    if not game_over:
        screen.fill(bg_color)
        ball_animation()
        player_animation()
        opponent_ai()

        pygame.draw.rect(screen, light_grey, player)
        pygame.draw.rect(screen, light_grey, opponent)
        pygame.draw.ellipse(screen, light_grey, ball)
        pygame.draw.aaline(screen, light_grey, (screen_width / 2, 0), (screen_width / 2, screen_height))

        draw_score()

        if player_score >= 5:
            game_over = True
            winner_text = "You Lose!"
            game_over_time = pygame.time.get_ticks()
        elif opponent_score >= 5:
            game_over = True
            winner_text = "You Win!"
            game_over_time = pygame.time.get_ticks()

    else:
        current_time = pygame.time.get_ticks()
        if current_time - game_over_time < delay_duration:
            screen.fill((0, 0, 0))
        else:
            draw_winner(winner_text)

    pygame.display.flip()
    clock.tick(60)
