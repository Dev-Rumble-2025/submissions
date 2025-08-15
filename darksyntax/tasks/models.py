from django.db import models
from django.conf import settings
# Create your models here.



class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    task_file = models.FileField(upload_to='tasks/')  # PDF or doc
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField(null=True, blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # Admin

    def __str__(self):
        return self.title

class Submission(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='submissions')
    submitted_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # Student
    submission_file = models.FileField(upload_to='submissions/')
    submitted_at = models.DateTimeField(auto_now_add=True)
    feedback = models.TextField(blank=True, null=True)
    graded = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.task.title} - {self.submitted_by.username}"
