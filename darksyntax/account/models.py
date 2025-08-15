from django.db import models
from django.contrib.auth.models import AbstractUser 


# Create your models here.
class CustomUser(AbstractUser):
    otp_code = models.CharField(max_length=10, blank=True, null=True, help_text="Temporary OTP for email verification")

