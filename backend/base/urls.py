# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
from .views import get_notes, CustomTokenObtainPairView, CustomTokenRefreshView, logout , is_authenticated, register

from django.urls import path

urlpatterns = [
    # for standard
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # for custom
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('notes/', get_notes),
    path('logout/', logout),
    path('authenticated/', is_authenticated),
    path('register/', register),
]