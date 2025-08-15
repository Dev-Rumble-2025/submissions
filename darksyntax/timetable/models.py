from django.db import models

class Timetable(models.Model):
    title = models.CharField(max_length=200)  # e.g., "BIT 3rd Year - Monday"
    description = models.TextField(blank=True)
    event_date = models.DateField()
    start_time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey('account.CustomUser', on_delete=models.CASCADE)  # Admin

    def __str__(self):
        return f"{self.title} ({self.event_date})"
