from django.urls import path
from .views import MarksView

urlpatterns = [
    path("marks/", MarksView.as_view()),
    path("marks/<int:pk>/", MarksView.as_view())
]
