from django.urls import path
from apis import views

app_name = "apis"

urlpatterns = [
    path("hello/", views.hello_world, name="hello"),
]
