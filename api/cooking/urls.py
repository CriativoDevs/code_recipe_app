from django.urls import path, include
from .views import (
    BlogApiView,
    CategoryApiView,
    CategoryPostApiView,
    PopularPostApiView
    )
from rest_framework import routers

router = routers.SimpleRouter()

router.register("blog", BlogApiView, basename="blog")
router.register("category", CategoryApiView, basename="category")
router.register(
    "categoryBaseBlogs",
    CategoryPostApiView,
    basename="categoryBaseBlogs"
    )
router.register(
    "PopularPostApiView",
    PopularPostApiView,
    basename="PopularPostApiView"
    )

urlpatterns = [
    path("", include(router.urls)),
]