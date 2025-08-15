from django.db import models

# Create your models here.
from django.db import models

class Notice(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey('account.CustomUser', on_delete=models.CASCADE)  # Admin

    def __str__(self):
        return self.title
